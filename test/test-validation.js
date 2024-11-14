import { strict as assert } from "node:assert/strict";
import { readFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { URL, fileURLToPath } from "node:url";
import { Validator, getSchema } from "../index.js";

function localFile(fileName) {
	return fileURLToPath(new URL(fileName, import.meta.url));
}

function importJSON(file) {
	return JSON.parse(readFileSync(localFile(file)));
}

const emptySpec = importJSON("./validation/empty.json");
const invalidSpec = importJSON("./validation/invalid-spec.json");
const yamlFileName = localFile("./validation/petstore-openapi.v3.yaml");
const jsonFileName = localFile("./validation/petstore-openapi.v3.1.json");
const mainSpecYamlFileName = localFile("./validation/main-spec.v3.yaml");
const subSpecYamlFileName = localFile("./validation/sub-spec.v3.yaml");
const subSpec2YamlFileName = localFile("./validation/sub-spec2.v3.yaml");
const subSpecUri = "http://www.example.com/subspec";
const subSpecUri2 = "subspec2";
const inlinedRefs = "x-inlined-refs";

async function testVersion(version) {
	test(`version ${version} works`, async (t) => {
		const petStoreSpec = importJSON(`./v${version}/petstore.json`);
		const copyPetStoreSpec = structuredClone(petStoreSpec);
		const validator = new Validator();

		const res = await validator.validate(petStoreSpec);
		assert.equal(res.valid, true, "petstore spec is valid");
		const ver = validator.version;
		assert.equal(
			ver,
			version,
			"petstore spec version matches expected version",
		);
		assert.deepEqual(
			petStoreSpec,
			copyPetStoreSpec,
			"original petstore spec is not modified",
		);
	});
}

test("Validator.supportedVersions should be a Set", (t) => {
	assert.equal(
		Validator.supportedVersions instanceof Set,
		true,
		"Validator.supportedVersions is a Set",
	);
});

for (const version of Validator.supportedVersions) {
	testVersion(version);
}

test("incorrect specification version should error", async (t) => {
	assert.throws(() => getSchema("DOES NOT EXIST"));
});

test("empty specification should fail", async (t) => {
	const validator = new Validator();
	const res = await validator.validate(emptySpec);
	assert.equal(res.valid, false, "empty spec is invalid");
	assert.equal(
		res.errors,
		"Cannot find supported swagger/openapi version in specification, version must be a string.",
		"correct error message",
	);
});

test("defect specification should fail", async (t) => {
	const validator = new Validator();
	const res = await validator.validate(invalidSpec);
	assert.equal(res.valid, false, "defect specification is invalid");
	assert.equal(Array.isArray(res.errors), true, "got array with errors");
});

test("undefined specification should fail", async (t) => {
	const validator = new Validator();
	const res = await validator.validate();
	assert.equal(res.valid, false, "undefined specification is invalid");
	assert.equal(
		res.errors,
		"Cannot find JSON, YAML or filename in data",
		"correct error message",
	);
});

test("yaml specification as string works", async (t) => {
	const yamlSpec = await readFile(yamlFileName, "utf-8");
	const validator = new Validator();

	const res = await validator.validate(yamlSpec);
	assert.equal(res.valid, true, "yaml spec as string is valid");
	const valVer = validator.version;
	assert.equal(
		valVer,
		"3.0",
		"yaml validator version matches expected version",
	);
	const specType = validator.specificationType;
	assert.equal(specType, "openapi", "yaml spec type matches expected version");
	const specVersion = validator.specificationVersion;
	assert.equal(specVersion, "3.0.0", "yaml spec type matches expected version");
});

test("multiple consecutive validations work", async (t) => {
	const yamlSpec = await readFile(yamlFileName, "utf-8");
	const validator = new Validator();

	const res = await validator.validate(yamlSpec);
	assert.equal(res.valid, true, "yaml spec as string is valid in round 1");
	const res2 = await validator.validate(yamlSpec);
	assert.equal(res2.valid, true, "yaml spec as string is valid in round 2");
	const ver = validator.version;
	assert.equal(ver, "3.0", "yaml spec version matches expected version");
});

test("json string validation works", async (t) => {
	const jsonSpec = await readFile(jsonFileName, "utf-8");
	const validator = new Validator();

	const res = await validator.validate(jsonSpec);
	assert.equal(res.valid, true, "json spec as string is valid");
	const ver = validator.version;
	assert.equal(ver, "3.1", "json spec version matches expected version");
});

test("object validation works", async (t) => {
	const jsonSpec = await readFile(jsonFileName, "utf-8");
	const objectSpec = JSON.parse(jsonSpec);
	const validator = new Validator();

	const res = await validator.validate(objectSpec);
	assert.equal(res.valid, true, "spec as object is valid");
	const ver = validator.version;
	assert.equal(ver, "3.1", "object spec version matches expected version");
});

test("multiple consecutive object validations work", async (t) => {
	const jsonSpec = await readFile(jsonFileName, "utf-8");
	const objectSpec = JSON.parse(jsonSpec);
	const validator = new Validator();

	const res = await validator.validate(objectSpec);
	assert.equal(res.valid, true, "spec as object is valid in round 1");
	const res2 = await validator.validate(objectSpec);
	assert.equal(res2.valid, true, "spec as object is valid in round 2");
	const ver = validator.version;
	assert.equal(ver, "3.1", "object spec version matches expected version");
});

test("re-validation of validator.specification works", async (t) => {
	const validator = new Validator();

	const res = await validator.validate(jsonFileName);
	assert.equal(res.valid, true, "spec is valid in round 1");
	const res2 = await validator.validate(validator.specification);
	assert.equal(res2.valid, true, "spec as object is valid in round 2");
	const ver = validator.version;
	assert.equal(ver, "3.1", "object spec version matches expected version");
});

test("invalid yaml specification as string gives an error", async (t) => {
	const yamlSpec = `
  yaml : : :
  yaml : : :
  `;
	const validator = new Validator();

	const res = await validator.validate(yamlSpec);
	assert.equal(res.valid, false, "validation fails as expected");
	assert.equal(
		res.errors,
		"Cannot find JSON, YAML or filename in data",
		"error message matches expection",
	);
});

test("yaml specification as filename works", async (t) => {
	const validator = new Validator();

	const res = await validator.validate(yamlFileName);
	assert.equal(res.valid, true, "yaml spec as filename is valid");
	const ver = validator.version;
	assert.equal(ver, "3.0", "yaml spec version matches expected version");
});

test("original petstore spec works", async (t) => {
	const validator = new Validator();
	const petStoreSpec = importJSON("./validation/petstore-swagger.v2.json");
	const res = await validator.validate(petStoreSpec);
	assert.equal(res.valid, true, "original petstore spec is valid");
	const ver = validator.version;
	assert.equal(
		ver,
		"2.0",
		"original petstore spec version matches expected version",
	);
	const resolvedSpec = validator.resolveRefs();
	assert.equal(
		resolvedSpec.paths["/pet"].post.parameters[0].schema.required[0],
		"name",
		"$refs are correctly resolved",
	);
});

test(`original petstore spec works with AJV strict:"log" option`, async (t) => {
	let logcount = 0;
	const log = () => logcount++;
	const logger = { log, warn: log, error: log };
	const validator = new Validator({ strict: "log", logger });
	const petStoreSpec = importJSON("./validation/petstore-swagger.v2.json");
	const res = await validator.validate(petStoreSpec);
	assert.equal(res.valid, true, "original petstore spec is valid");
	const ver = validator.version;
	assert.equal(
		ver,
		"2.0",
		"original petstore spec version matches expected version",
	);
	const resolvedSpec = validator.resolveRefs();
	assert.equal(
		resolvedSpec.paths["/pet"].post.parameters[0].schema.required[0],
		"name",
		"$refs are correctly resolved",
	);
	assert.equal(logcount > 0, true, "warnings are being logged");
});

test("invalid filename returns an error", async (t) => {
	const validator = new Validator();

	const res = await validator.validate("nonExistingFilename");
	assert.equal(res.valid, false, "validation fails as expected");
	assert.equal(
		res.errors,
		"Cannot find JSON, YAML or filename in data",
		"error message matches expection",
	);
});

test("addSpecRef: non string URI throws an error", async (t) => {
	const validator = new Validator();
	assert.rejects(
		validator.addSpecRef(subSpecYamlFileName, null),
		new Error("uri parameter or $id attribute must be a string"),
		"error message matches expection",
	);
});

test("addSpecRef: Invalid filename returns an error", async (t) => {
	const validator = new Validator();
	assert.rejects(
		validator.addSpecRef("nonExistingFilename", "extraUri"),
		new Error("Cannot find JSON, YAML or filename in data"),
		"error message matches expection",
	);
});

test("addSpecRef: no uri and no $id attribute returns an error", (t) => {
	const validator = new Validator();
	assert.rejects(
		validator.addSpecRef(subSpecYamlFileName),
		new Error("uri parameter or $id attribute must be a string"),
		"error message matches expection",
	);
});

test("addSpecRef works", async (t) => {
	const validator = new Validator();
	await validator.addSpecRef(subSpecYamlFileName, subSpecUri);
	await validator.addSpecRef(subSpec2YamlFileName);
	const res = await validator.validate(mainSpecYamlFileName);
	assert.equal(res.valid, true, "main spec + subspec is valid");
	assert.equal(
		validator.specification[inlinedRefs][subSpecUri].components.requestBodies
			.Pet.required,
		true,
	);
	assert.equal(
		validator.specification[inlinedRefs][subSpecUri2].get.summary,
		"Finds Pets by status",
	);
	const resolvedSpec = validator.resolveRefs();
	assert.equal(
		resolvedSpec.paths["/pet"].post.requestBody.required,
		true,
		"$refs from main spec to sub spec are correctly resolved",
	);
	assert.equal(
		resolvedSpec.paths["/pet/findByStatus"].get.summary,
		"Finds Pets by status",
		"$refs from main spec to sub2 spec are correctly resolved",
	);
});

test("re-validation works after resolving refs", async (t) => {
	const validator = new Validator();
	await validator.addSpecRef(subSpecYamlFileName, subSpecUri);
	await validator.addSpecRef(subSpec2YamlFileName);
	const res = await validator.validate(mainSpecYamlFileName);
	assert.equal(res.valid, true, "main spec + subspec is valid");
	assert.equal(
		validator.specification[inlinedRefs][subSpecUri].components.requestBodies
			.Pet.required,
		true,
	);
	assert.equal(
		validator.specification[inlinedRefs][subSpecUri2].get.summary,
		"Finds Pets by status",
	);

	validator.resolveRefs();

	const res2 = await validator.validate(validator.specification);
	assert.equal(
		res2.valid,
		true,
		"main spec + subspec is valid after resolving refs",
	);

	assert.equal(
		validator.specification.paths["/pet"].post.requestBody.required,
		true,
		"$refs from main spec to sub spec are correctly resolved",
	);
	assert.equal(
		validator.specification.paths["/pet/findByStatus"].get.summary,
		"Finds Pets by status",
		"$refs from main spec to sub2 spec are correctly resolved",
	);
});

test("validateBundle: no spec returns an error", async (t) => {
	const validator = new Validator();
	const res = await validator.validateBundle();
	assert.equal(res.valid, false, "validation fails as expected");
	assert.equal(
		res.errors,
		"Parameter data must be an array",
		"error message matches expection",
	);
});

test("validateBundle: unreadable spec returns an error", async (t) => {
	const yamlSpec = `
	yaml : : :
	yaml : : :
	`;
	const validator = new Validator();
	assert.rejects(
		validator.validateBundle([yamlSpec]),
		new Error("Cannot find JSON, YAML or filename in data"),
		"error message matches expectation",
	);
});

test("validateBundle: double spec returns an error", async (t) => {
	const validator = new Validator();
	assert.rejects(
		validator.validateBundle([yamlFileName, yamlFileName]),
		new Error("Only one openApi specification can be validated at a time"),
		"error message matches expectation",
	);
});
