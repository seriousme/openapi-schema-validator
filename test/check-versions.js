const tap = require("tap");
const test = tap.test;

const util = require("util");
const fs = require("fs");
const { createHash } = require("crypto");
const Validator = require("../index.js");
const readDir = util.promisify(fs.readdir);

const supportedVersions = Validator.supportedVersions;
const openApiDir = `${__dirname}/../schemas.orig`;

tap.formatSnapshot = (object) => {
  const hash = createHash("sha256");
  hash.update(JSON.stringify(object));
  return hash.digest("hex");
};

async function getOpenApiSchemasVersions(oasdir) {
  const dirs = (await readDir(oasdir)).filter((d) => d !== "v1.2");
  return dirs.map((dir) => dir.replace(/^v/, ""));
}

async function testVersion(version) {
  test(`Check if version ${version} is unchanged`, async (t) => {
    t.plan(1);
    const schema = require(`${openApiDir}/v${version}/schema.json`);
    t.matchSnapshot(schema, `schema v${version} is unchanged`);
  });
}

test(`no new versions should be present`, async (t) => {
  t.plan(1);
  const versions = await getOpenApiSchemasVersions(openApiDir);
  const difference = versions.filter((x) => !supportedVersions.has(x));
  t.same(difference, [], "all versions are known");
});

supportedVersions.forEach(testVersion);
