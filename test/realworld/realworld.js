const Validator = require("../../index.js");
const validator = new Validator();
const { writeFileSync } = require("fs");
const fetch = require("node-fetch");
const failedFile = "./failed.json";
const newFailedFile = "./failed.updated.json";
const failedData = require(failedFile);
const failedMap = new Map(Object.entries(failedData));

async function fetchApiList(onlyFailed = false) {
  const response = await fetch("https://api.apis.guru/v2/list.json");

  if (!response.ok) {
    throw new Error("Unable to download real-world APIs from apis.guru");
  }
  const apiList = await response.json();
  const apiMap = new Map();
  for (const key in apiList) {
    if (!onlyFailed || failedMap.has(key)) {
      const api = apiList[key];
      const latestVersion = api.versions[api.preferred];
      apiMap.set(key, {
        name: key,
        apiVersion: api.preferred,
        openApiVersion: latestVersion.openapiVer,
        yamlUrl: latestVersion.swaggerYamlUrl,
        jsonUrl: latestVersion.swaggerUrl,
        updated: latestVersion.updated,
      });
    }
  }
  return apiMap;
}

async function fetchYaml(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Unable to download ${url}`);
  }

  return await response.text();
}

async function testAPIs(onlyFailed = false) {
  const apiList = await fetchApiList(onlyFailed);
  const failed = new Map();
  const results = {
    total: apiList.size,
    current: 0,
    valid: 0,
    invalid: 0,
    knownFailed: 0,
  };
  for (const [name, api] of apiList) {
    const spec = await fetchYaml(api.yamlUrl);
    results.current++;
    api.result = await validator.validate(spec);
    if (api.result.valid === true) {
      results.valid++;
    } else {
      results.invalid++;
      if (failedMap.has(name)) {
        const failedApiErrors = JSON.stringify(
          failedMap.get(name).result.errors
        );
        if (failedApiErrors === JSON.stringify(api.result.errors)) {
          results.knownFailed++;
          api.knownFailed = true;
        }
      }
      failed.set(name, api);
    }
    console.log(JSON.stringify(results), name);
  }
  console.log(
    `Finished testing ${results.total} APIs
     ${results.invalid} tests failed of which ${results.knownFailed} were known failures`
  );
  if (results.knownFailed !== results.invalid) {
    console.log(`new failures found, creating ${newFailedFile}`);
    writeFileSync(
      newFailedFile,
      JSON.stringify(Object.fromEntries(failed), null, 2),
      "utf8"
    );
    process.exit(1);
  }
}

testAPIs();
