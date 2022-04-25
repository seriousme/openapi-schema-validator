import tap from "tap";
import { URL } from 'url';
import { readdir } from "fs/promises";
import { readFileSync } from "fs";
import { Validator } from "../index.js";
import { createHash } from "crypto";

const supportedVersions = Validator.supportedVersions;

function localPath(path){
  return new URL(path, import.meta.url).pathname;
}

const openApiDir = localPath('../schemas.orig');
const test = tap.test;
tap.formatSnapshot = (object) => {
  const hash = createHash("sha256");
  hash.update(JSON.stringify(object));
  return hash.digest("hex");
};

function readJSON(file) {
  return JSON.parse(readFileSync(file));
}

async function getOpenApiSchemasVersions(oasdir) {
  const dirs = (await readdir(oasdir)).filter((d) => !d.endsWith(".html"));
  return dirs;
}

async function testVersion(version) {
  test(`Check if version ${version} is unchanged`, async (t) => {
    t.plan(1);
    const schemaList = (await readdir(`${openApiDir}/${version}/schema/`));
    const lastSchema = schemaList.pop();
    const schema = readJSON(`${openApiDir}/${version}/schema/${lastSchema}`);
    t.matchSnapshot(schema, `schema v${version} is unchanged`);
  });
}

test(`no new versions should be present`, async (t) => {
  t.plan(1);
  const versions = await getOpenApiSchemasVersions(openApiDir);
  const difference = versions.filter((x) => !supportedVersions.has(x));
  t.same(difference, [], "all versions are known");
});

async function testAvailableVersions() {
  const versions = await getOpenApiSchemasVersions(openApiDir);
  versions.filter((x) => supportedVersions.has(x)).forEach(testVersion);
}
// supportedVersions.forEach(testVersion);
testAvailableVersions();
