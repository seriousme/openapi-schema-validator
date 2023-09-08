import { createHash } from "crypto";
import { readFileSync } from "fs";
import { strict as assert } from "node:assert/strict";
import { test } from "node:test";
import { URL } from "url";
import { readdir } from "fs/promises";
import { Validator } from "../index.js";
import { Snapshot } from "./snapshot.js";

const supportedVersions = Validator.supportedVersions;

function localPath(path) {
	return new URL(path, import.meta.url).pathname;
}

const snapShotFile = localPath("snapshots-check-versions.json");
const updateSnapShot = process.argv[2] !== undefined;
const snapshot = new Snapshot(snapShotFile, updateSnapShot);

function matchSnapshot(obj, name) {
	const hash = createHash("sha256");
	hash.update(JSON.stringify(obj));
	const hashValue = hash.digest("hex");
	return snapshot.match(hashValue, name);
}

const openApiDir = localPath("../schemas.orig");
function readJSON(file) {
	return JSON.parse(readFileSync(file));
}

async function getOpenApiSchemasVersions(oasdir) {
	const dirs = (await readdir(oasdir)).filter((d) => !d.endsWith(".html"));
	return dirs;
}

async function testVersion(version) {
	test(`Check if version ${version} is unchanged`, async (t) => {
		const schemaList = await readdir(`${openApiDir}/${version}/schema/`);
		const lastSchema = schemaList.pop();
		const schema = readJSON(`${openApiDir}/${version}/schema/${lastSchema}`);
		assert.equal(
			matchSnapshot(schema, `schema v${version} is unchanged`),
			true,
		);
	});
}

test("no new versions should be present", async (t) => {
	const versions = await getOpenApiSchemasVersions(openApiDir);
	const difference = versions.filter((x) => !supportedVersions.has(x));
	assert.equal(difference.length, 0, "all versions are known");
});

async function testAvailableVersions() {
	const versions = await getOpenApiSchemasVersions(openApiDir);
	versions.filter((x) => supportedVersions.has(x)).forEach(testVersion);
}
// supportedVersions.forEach(testVersion);
testAvailableVersions();
