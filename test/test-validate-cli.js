import { strict as assert } from "node:assert/strict";
import { execSync } from "node:child_process";
import { test } from "node:test";

function localFile(file) {
	return new URL(file, import.meta.url).pathname;
}

const cli = localFile("../bin/validate-api-cli.js");

test("cli does not error", (t) => {
	const yamlFileName = localFile("./validation/petstore-openapi.v3.yaml");
	const result = JSON.parse(execSync(`node ${cli} ${yamlFileName}`));
	assert.equal(result.valid, true, "cli validation of petstore spec works");
});

test("cli fails on empty spec", (t) => {
	const yamlFileName = localFile("./validation/empty.json");
	assert.throws(() => execSync(`node ${cli} ${yamlFileName}`));
});

test("cli fails on no spec", (t) => {
	assert.throws(() => execSync(`node ${cli}`));
});
