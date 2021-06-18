const { test } = require("tap");

const Validator = require("../index.js");

const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

const localFile = (fileName) =>
  new URL(fileName, `file://${__dirname}/`).pathname;
const emptySpec = require(`./validation/empty.json`);
const invalidSpec = require(`./validation/invalid-spec.json`);
const yamlFileName = localFile(`./validation/petstore-openapi.v3.yaml`);

async function testVersion(version) {
  test(`version ${version} works`, async (t) => {
    t.plan(2);
    const petStoreSpec = require(`./v${version}/petstore.json`);
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
    "correct error message"
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
    "correct error message"
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
    "error message matches expection"
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
  const petStoreSpec = require(`./validation/petstore-swagger.v2.json`);
  const res = await validator.validate(petStoreSpec);
  console.log(res.errors);
  t.equal(res.valid, true, "original petstore spec is valid");
  const ver = validator.version;
  t.equal(
    ver,
    "2.0",
    "original petstore spec version matches expected version"
  );
  const resolvedSpec = validator.resolveRefs();
  t.equal(
    resolvedSpec.paths["/pet"].post.parameters[0].schema.required[0],
    "name",
    "$refs are correctly resolved"
  );
});

test(`original petstore spec works with AJV strict:"log" option`, async (t) => {
  t.plan(3);
  const validator = new Validator({ strict: "log" });
  const petStoreSpec = require(`./validation/petstore-swagger.v2.json`);
  const res = await validator.validate(petStoreSpec);
  console.log(res.errors);
  t.equal(res.valid, true, "original petstore spec is valid");
  const ver = validator.version;
  t.equal(
    ver,
    "2.0",
    "original petstore spec version matches expected version"
  );
  const resolvedSpec = validator.resolveRefs();
  t.equal(
    resolvedSpec.paths["/pet"].post.parameters[0].schema.required[0],
    "name",
    "$refs are correctly resolved"
  );
});

test(`Invalid filename returns an error`, async (t) => {
  t.plan(2);
  const validator = new Validator();

  const res = await validator.validate("nonExistingFilename");
  t.equal(res.valid, false, "validation fails as expected");
  t.equal(
    res.errors,
    "Cannot find JSON, YAML or filename in data",
    "error message matches expection"
  );
});
