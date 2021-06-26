const Validator = require("../../index.js");
const validator = new Validator();
const { writeFileSync } = require("fs");
const fetch = require("node-fetch");
const { argv } = require("process");
const failedFile = "./failed.json";
const newFailedFile = "./failed.updated.json";
const defaultPercentage = 10;

const failedData = require(failedFile);
const failedMap = new Map(Object.entries(failedData));

function sample(fullMap, percentage) {
  const { floor, random } = Math;
  const len = fullMap.size
  const size = floor(len * (percentage / 100));
  const sampleMap = new Map();
  const mapKeys = Array.from(fullMap.keys());
  for (let i = 0; i < size; i++) {
    let index;
    let key;
    do {
      index = floor(random() * len);
      key = mapKeys[index];
    }
    while (sampleMap.has(key));

    sampleMap.set(key, fullMap.get(key));
  }
  return sampleMap;
}

async function fetchApiList(percentage, onlyFailed = false) {
  const response = await fetch("https://api.apis.guru/v2/list.json");

  if (!response.ok) {
    throw new Error("Unable to download real-world APIs from apis.guru");
  }
  const apiList = await response.json();
  const apiMap = new Map()
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
  if (percentage !== 100) {
    console.log(`testing a random set containing ${percentage}% of ${apiMap.size} available APIs`)
    return sample(apiMap, percentage);
  }
  console.log(`testing all ${apiMap.size} available APIs`)
  return apiMap;
}

async function fetchYaml(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Unable to download ${url}`);
  }

  return await response.text();
}

async function testAPIs(percentage, onlyFailed) {
  if (onlyFailed) {
    percentage = 100;
  }
  const apiList = await fetchApiList(percentage, onlyFailed);
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
    if (percentage === 100) {
      console.log(`new failures found, creating ${newFailedFile}`);
      writeFileSync(
        newFailedFile,
        JSON.stringify(Object.fromEntries(failed), null, 2),
        "utf8"
      );
    }
    process.exit(1);
  }
}

function parseArgs() {
    const args = process.argv.slice(2)
    const params = new Set();
    const opts = ['failedOnly', 'all']
    args.forEach(arg => {
        opts.forEach(opt => {
            if (`--${opt}`.startsWith(arg)) {
                params.add(opt)
            }
        })
    });
    if (params.size !== args.length) {
        console.log(`
        usage: ${process.argv[1].split("/").pop()} [--failedOnly] [--all]
        where: 
        --failedOnly will only try all APIs that have previously been found failing
        --all will test all APIs on the list, by default only ${defaultPercentage}% of APIs will be tested.
        `);
        process.exit(1);
    }
    return params;
}

const params = parseArgs();
const failedOnly = params.has('failedOnly');
const percentage = params.has('all') ? 100 : defaultPercentage;
testAPIs(percentage, failedOnly);
