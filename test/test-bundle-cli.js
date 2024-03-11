import { execSync } from "node:child_process";
import { readFileSync, unlinkSync } from "node:fs";
import { strict as assert } from "node:assert/strict";
import { test } from "node:test";
import { URL, fileURLToPath } from "node:url";
import { load } from "js-yaml";

function localFile(fileName) {
	return fileURLToPath(new URL(fileName, import.meta.url));
}

function importJSON(file) {
	return JSON.parse(readFileSync(localFile(file)));
}

const cli = localFile("../bin/bundle-api-cli.js");
const tmpBundle = localFile("./bundle/bundle.tmp.yaml");

test("cli does not error", (t) => {
	const yamlFileName = localFile("./validation/petstore-openapi.v3.yaml");
	const result = assert.doesNotThrow(
		() => JSON.parse(execSync(`node ${cli} ${yamlFileName}`)),
		"cli bundle of petstore spec works",
	);
});

test("cli fails on empty spec", (t) => {
	const yamlFileName = localFile("./validation/empty.json");
	assert.throws(() => execSync(`node ${cli} ${yamlFileName}`));
});

test("cli fails on no spec", (t) => {
	assert.throws(() => execSync(`node ${cli}`));
});

test("cli fails on unknown type", (t) => {
	assert.throws(() => execSync(`node ${cli} -t yason`));
});

test("cli bundles subspecs as JSON to console", (t) => {
	const main = localFile("./bundle/main-spec.v3.yaml");
	const subspec = localFile("./bundle/sub-spec-withID.v3.yaml");
	const subspec2 = localFile("./bundle/sub-spec2.v3.yaml");
	const bundle = importJSON("./bundle/bundle.v3.json");
	const result = JSON.parse(
		execSync(`node ${cli} ${main} ${subspec} ${subspec2}`),
	);
	assert.deepEqual(result, bundle);
});

test("cli bundles subspecs as YAML to file", (t) => {
	const main = localFile("./bundle/main-spec.v3.yaml");
	const subspec = localFile("./bundle/sub-spec-withID.v3.yaml");
	const subspec2 = localFile("./bundle/sub-spec2.v3.yaml");
	const bundle = importJSON("./bundle/bundle.v3.json");
	execSync(
		`node ${cli} -t yaml -o ${tmpBundle} ${main} ${subspec} ${subspec2}`,
	);
	const result = load(readFileSync(tmpBundle));
	unlinkSync(tmpBundle);
	assert.deepEqual(result, bundle);
});
