import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { test } from "node:test";
import { URL } from "node:url";
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
	const dirents = await readdir(oasdir, { withFileTypes: true });
	const directories = dirents
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name);
	return directories;
}

async function testVersion(version) {
	test(`Check if version ${version} is unchanged`, async (t) => {
		const versionDir = `${openApiDir}/${version}/schema/`;
		const schemaList = (await readdir(versionDir)).filter(
			(f) => !f.endsWith(".md"),
		);
		const lastSchema = schemaList.pop();
		const schema = readJSON(`${openApiDir}/${version}/schema/${lastSchema}`);
		t.assert.equal(
			matchSnapshot(schema, `schema v${version} is unchanged`),
			true,
		);
	});
}

test("no new versions should be present", async (t) => {
	const versions = await getOpenApiSchemasVersions(openApiDir);
	const difference = versions.filter((x) => !supportedVersions.has(x));
	t.assert.equal(difference.length, 0, "all versions are known");
});

async function testAvailableVersions() {
	const versions = await getOpenApiSchemasVersions(openApiDir);
	for (const version of versions) {
		testVersion(version);
	}
}

testAvailableVersions();
