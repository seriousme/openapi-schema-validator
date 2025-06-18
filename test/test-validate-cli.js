import { execSync } from "node:child_process";
import { test } from "node:test";
import { fileURLToPath, URL } from "node:url";

function localFile(fileName) {
	return fileURLToPath(new URL(fileName, import.meta.url));
}

const cli = localFile("../bin/validate-api-cli.js");

test("cli does not error", (t) => {
	const yamlFileName = localFile("./validation/petstore-openapi.v3.yaml");
	const result = JSON.parse(execSync(`node ${cli} ${yamlFileName}`));
	t.assert.equal(result.valid, true, "cli validation of petstore spec works");
});

test("cli fails on empty spec", (t) => {
	const yamlFileName = localFile("./validation/empty.json");
	t.assert.throws(() => execSync(`node ${cli} ${yamlFileName}`));
});

test("cli fails on no spec", (t) => {
	t.assert.throws(() => execSync(`node ${cli}`));
});
