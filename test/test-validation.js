import { fileURLToPath, URL } from "url";
import { test } from "tap";
import { Validator } from "../index.js";
import { readFileSync } from "fs";
import { readFile } from "fs/promises";

function localFile(fileName) {
  return fileURLToPath(new URL(fileName, import.meta.url));
}

function importJSON(file) {
  return JSON.parse(readFileSync(localFile(file)));
}

const emptySpec = importJSON(`./validation/empty.json`);
const invalidSpec = importJSON(`./validation/invalid-spec.json`);
const yamlFileName = localFile(`./validation/petstore-openapi.v3.yaml`);
const mainSpecYamlFileName = localFile(`./validation/main-spec.v3.yaml`);
const subSpecYamlFileName = localFile(`./validation/sub-spec.v3.yaml`);
const subSpec2YamlFileName = localFile(`./validation/sub-spec2.v3.yaml`);
const subSpecUri = "http://www.example.com/subspec";
const subSpecUri2 = "subspec2";
const inlinedRefs = "x-inlined-refs";

async function testVersion(version) {
  test(`version ${version} works`, async (t) => {
    t.plan(2);
    const petStoreSpec = importJSON(`./v${version}/petstore.json`);
    const validator = new Validator();

    const res = await validator.validate(petStoreSpec);
    t.equal(res.valid, true, "petstore spec is valid");
    const ver = validator.version;
    t.equal(ver, version, "petstore spec version matches expected version");
  });
}

test(`Validator.supportedVersions should be a Set`, (t) => {
  t.plan(1);
  t.type(Validator.supportedVersions, Set);
});

Validator.supportedVersions.forEach(testVersion);

test(`empty specification should fail`, async (t) => {
  t.plan(2);
  const validator = new Validator();
  const res = await validator.validate(emptySpec);
  t.equal(res.valid, false, "empty spec is invalid");
  t.equal(
    res.errors,
    "Cannot find supported swagger/openapi version in specification, version must be a string.",
    "correct error message",
  );
});

test(`defect specification should fail`, async (t) => {
  t.plan(2);
  const validator = new Validator();
  const res = await validator.validate(invalidSpec);
  t.equal(res.valid, false, "defect specification is invalid");
  t.type(res.errors, Array, "got array with errors");
});

test(`undefined specification should fail`, async (t) => {
  t.plan(2);
  const validator = new Validator();
  const res = await validator.validate();
  t.equal(res.valid, false, "undefined specification is invalid");
  t.equal(
    res.errors,
    "Cannot find JSON, YAML or filename in data",
    "correct error message",
  );
});

test(`yaml specification as string works`, async (t) => {
  t.plan(2);
  const yamlSpec = await readFile(yamlFileName, "utf-8");
  const validator = new Validator();

  const res = await validator.validate(yamlSpec);
  t.equal(res.valid, true, "yaml spec as string is valid");
  const ver = validator.version;
  t.equal(ver, "3.0", "yaml spec version matches expected version");
});

test(`multiple consecutive validations work`, async (t) => {
  t.plan(3);
  const yamlSpec = await readFile(yamlFileName, "utf-8");
  const validator = new Validator();

  const res = await validator.validate(yamlSpec);
  t.equal(res.valid, true, "yaml spec as string is valid in round 1");
  const res2 = await validator.validate(yamlSpec);
  t.equal(res2.valid, true, "yaml spec as string is valid in round 2");
  const ver = validator.version;
  t.equal(ver, "3.0", "yaml spec version matches expected version");
});

test(`Invalid yaml specification as string gives an error`, async (t) => {
  t.plan(2);
  const yamlSpec = `
  yaml : : :
  yaml : : :
  `;
  const validator = new Validator();

  const res = await validator.validate(yamlSpec);
  t.equal(res.valid, false, "validation fails as expected");
  t.equal(
    res.errors,
    "Cannot find JSON, YAML or filename in data",
    "error message matches expection",
  );
});

test(`yaml specification as filename works`, async (t) => {
  t.plan(2);
  const validator = new Validator();

  const res = await validator.validate(yamlFileName);
  t.equal(res.valid, true, "yaml spec as filename is valid");
  const ver = validator.version;
  t.equal(ver, "3.0", "yaml spec version matches expected version");
});

test(`original petstore spec works`, async (t) => {
  t.plan(3);
  const validator = new Validator();
  const petStoreSpec = importJSON(`./validation/petstore-swagger.v2.json`);
  const res = await validator.validate(petStoreSpec);
  t.equal(res.valid, true, "original petstore spec is valid");
  const ver = validator.version;
  t.equal(
    ver,
    "2.0",
    "original petstore spec version matches expected version",
  );
  const resolvedSpec = validator.resolveRefs();
  t.equal(
    resolvedSpec.paths["/pet"].post.parameters[0].schema.required[0],
    "name",
    "$refs are correctly resolved",
  );
});

test(`original petstore spec works with AJV strict:"log" option`, async (t) => {
  t.plan(4);
  let logcount = 0;
  const log = () => logcount++;
  const logger = { log, warn: log, error: log };
  const validator = new Validator({ strict: "log", logger });
  const petStoreSpec = importJSON(`./validation/petstore-swagger.v2.json`);
  const res = await validator.validate(petStoreSpec);
  t.equal(res.valid, true, "original petstore spec is valid");
  const ver = validator.version;
  t.equal(
    ver,
    "2.0",
    "original petstore spec version matches expected version",
  );
  const resolvedSpec = validator.resolveRefs();
  t.equal(
    resolvedSpec.paths["/pet"].post.parameters[0].schema.required[0],
    "name",
    "$refs are correctly resolved",
  );
  t.equal(logcount > 0, true, "warnings are being logged");
});

test(`Invalid filename returns an error`, async (t) => {
  t.plan(2);
  const validator = new Validator();

  const res = await validator.validate("nonExistingFilename");
  t.equal(res.valid, false, "validation fails as expected");
  t.equal(
    res.errors,
    "Cannot find JSON, YAML or filename in data",
    "error message matches expection",
  );
});

test(`addSpecRef: non string URI returns an error`, (t) => {
  t.plan(1);
  const validator = new Validator();
  t.rejects(
    validator.addSpecRef(subSpecYamlFileName, null),
    "uri parameter or $id attribute must be a string",
    "error message matches expection",
    {}
  );
});

test(`addSpecRef: Invalid filename returns an error`, (t) => {
  t.plan(1);
  const validator = new Validator();
  t.rejects(
    validator.addSpecRef("nonExistingFilename", "extraUri"),
    "Cannot find JSON, YAML or filename in data",
    "error message matches expection",
    {}
  );
});

test(`addSpecRef: no uri and no $id attribute returns an error`, (t) => {
  t.plan(1);
  const validator = new Validator();
  t.rejects(
    validator.addSpecRef(subSpecYamlFileName),
    "uri parameter or $id attribute must be present",
    "error message matches expection",
    {}
  );
});

test(`addSpecRef works`, async (t) => {
  t.plan(5);
  const validator = new Validator();
  await validator.addSpecRef(subSpecYamlFileName, subSpecUri);
  await validator.addSpecRef(subSpec2YamlFileName);
  const res = await validator.validate(mainSpecYamlFileName);
  t.equal(res.valid, true, "main spec + subspec is valid");
  t.equal(
    validator.specification[inlinedRefs][subSpecUri].components.requestBodies
      .Pet.required,
    true,
  );
  t.equal(
    validator.specification[inlinedRefs][subSpecUri2].get.summary,
    "Finds Pets by status",
  );
  const resolvedSpec = validator.resolveRefs();
  t.equal(
    resolvedSpec.paths["/pet"].post.requestBody.required,
    true,
    "$refs from main spec to sub spec are correctly resolved",
  );
  t.equal(
    resolvedSpec.paths["/pet/findByStatus"].get.summary,
    "Finds Pets by status",
    "$refs from main spec to sub2 spec are correctly resolved",
  );
});
