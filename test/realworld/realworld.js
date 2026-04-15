// test the validator against the APIs of https://apis.guru
import { createRequire } from "node:module";

const importJSON = createRequire(import.meta.url);
const localFile = (fileName) => new URL(fileName, import.meta.url).pathname;

import { Validator } from "../../index.js";

const validator = new Validator();

import { writeFileSync } from "node:fs";
import { argv, exit } from "node:process";
import { parse } from "yaml";
import { createReport } from "./createReport.js";

const failedFile = localFile("./failed.json");
const reportFile = localFile("./failed.md");
const newFailedFile = localFile("./failed.updated.json");
const newReportFile = localFile("./failed.updated.md");
const defaultPercentage = 10;
const failedMap = loadFailedData(failedFile);

function loadFailedData(fileName) {
	const dataMap = new Map();
	try {
		const data = importJSON(fileName);
		data.failedTests = data.failedTests || [];
		for (const item of data.failedTests) {
			dataMap.set(item.name, item);
		}
		return dataMap;
	} catch (_) {
		return dataMap;
	}
}

function sample(fullMap, percentage) {
	const { floor, random } = Math;
	const len = fullMap.size;
	const size = floor(len * (percentage / 100));
	const sampleMap = new Map();
	const mapKeys = Array.from(fullMap.keys());
	for (let i = 0; i < size; i++) {
		let index;
		let key;
		do {
			index = floor(random() * len);
			key = mapKeys[index];
		} while (sampleMap.has(key));

		sampleMap.set(key, fullMap.get(key));
	}
	return sampleMap;
}

function unescapeJsonPointer(str) {
	return str.replace(/~1/g, "/").replace(/~0/g, "~");
}

function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

function makeRexp(pathItem) {
	const res = unescapeJsonPointer(pathItem);
	return escapeRegExp(res);
}

function yamlLine(yamlSpec, path) {
	const lines = yamlSpec.split("\n");
	const paths = path.split("/").slice(1);
	let num = 0;
	for (const pathItem of paths) {
		if (Number.isInteger(+pathItem) && num) {
			num = findArrayItem(lines, num, pathItem);
		} else {
			num = findItem(lines, num, pathItem);
		}
	}
	return num + 1;
}

function findArrayItem(lines, num, pathIdx) {
	if (num > lines.length - 2) {
		return num;
	}
	const firstItem = lines[num + 1];
	const match = firstItem.match(/^\s*-/);
	if (match === null) {
		// it was not an array index, but a key
		return findItem(lines, num, pathIdx);
	}
	const prefix = match[0];
	let lineNum = num;
	let pathIdxCtr = pathIdx;
	while (pathIdxCtr > 0) {
		lineNum++;
		if (lines[lineNum].startsWith(prefix)) {
			pathIdxCtr--;
		}
	}
	return lineNum + 1;
}

function findItem(lines, num, pathItem) {
	let lineNum = num;
	const token = new RegExp(`^\\s*"?${makeRexp(pathItem)}"?:`);
	const maxNum = lines.length - 1;
	while (!lines[lineNum].match(token) && lineNum < maxNum) {
		lineNum++;
	}
	return lineNum;
}

function getInstanceValue(yamlSpec, path) {
	if (path === "") {
		return [false, "content too large to display here"];
	}
	const obj = parse(yamlSpec);
	const paths = path.split("/").slice(1);
	const result = paths.reduce((o, n) => o[unescapeJsonPointer(n)], obj);
	return [true, result];
}

function yamlToGitHub(url) {
	return url.replace(
		"https://api.apis.guru/v2/specs/",
		"https://github.com/APIs-guru/openapi-directory/blob/main/APIs/",
	);
}

async function fetchApiList(percentage, onlyFailed = false) {
	const response = await fetch("https://api.apis.guru/v2/list.json");

	if (!response.ok) {
		throw new Error("Unable to download real-world APIs from apis.guru");
	}
	const apiList = await response.json();
	const apiListSize = Object.keys(apiList).length;
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
				gitHubUrl: yamlToGitHub(latestVersion.swaggerYamlUrl),
				updated: latestVersion.updated,
			});
		}
	}
	if (percentage !== 100) {
		console.log(
			`testing a random set containing ${percentage}% of ${apiMap.size} available APIs`,
		);
		return [sample(apiMap, percentage), apiListSize, apiMap.size];
	}
	console.log(`testing ${apiMap.size} of ${apiListSize} available APIs`);
	return [apiMap, apiListSize, apiMap.size];
}

async function fetchYaml(url, retries = 3) {
	for (let attempt = 1; attempt <= retries; attempt++) {
		try {
			const controller = new AbortController();
			const timeout = setTimeout(() => controller.abort(), 15000); // 15s timeout
			const response = await fetch(url, { signal: controller.signal });
			clearTimeout(timeout);

			if (!response.ok) {
				throw new Error(`Unable to download ${url}`);
			}
			return await response.text();
		} catch (error) {
			if (attempt === retries || error.name !== "AbortError") throw error;
			console.warn(
				`Retrying fetch for ${url} (attempt ${attempt}) due to timeout...`,
			);
		}
	}
}

function writeReport(ci, totalSize, results, failed) {
	const jsonFile = ci ? failedFile : newFailedFile;
	const mdFile = ci ? reportFile : newReportFile;
	const data = {
		testDate: new Date().toISOString(),
		totalApiCount: totalSize,
		testedAPICount: results.total,
		failedAPICount: results.invalid,
		knownFailedCount: results.knownFailed,
		failedTests: Array.from(failed.values()),
	};
	console.log("new/updated failures found");
	console.log(`creating ${jsonFile}`);
	writeFileSync(jsonFile, JSON.stringify(data, null, "\t"), "utf8");
	console.log(`creating new report ${mdFile}`);
	writeFileSync(mdFile, createReport(data), "utf8");
}

async function doTest(apiList) {
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
		api.validatorVersion = validator.version;
		api.specificationType = validator.specificationType;
		api.specificationVersion = validator.specificationVersion;
		if (api.result.valid === true) {
			results.valid++;
		} else {
			results.invalid++;
			if (typeof api.result.errors === "object") {
				api.result.errors.forEach((item) => {
					const [res, value] = getInstanceValue(spec, item.instancePath);
					item.hasInstanceValue = res;
					item.instanceValue = value;
					item.gitHubUrl = `${api.gitHubUrl}#L${yamlLine(
						spec,
						item.instancePath,
					)}`;
				});
			}
			if (failedMap.has(name)) {
				const failedApiErrors = JSON.stringify(
					failedMap.get(name).result.errors,
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
	return { results, failed };
}

async function testAPIs(testPercentage, onlyFailed, ci) {
	let percentage = testPercentage;
	if (onlyFailed || ci) {
		percentage = 100;
	}
	const [apiList, totalSize, _latestSize] = await fetchApiList(
		percentage,
		onlyFailed,
	);
	const { results, failed } = await doTest(apiList);
	console.log(
		`Finished testing ${results.total} APIs
     ${results.invalid} tests failed of which ${results.knownFailed} were known failures`,
	);
	if (
		failedMap.size !== results.knownFailed ||
		results.knownFailed !== results.invalid ||
		(onlyFailed && results.invalid !== results.total)
	) {
		const exitCode = ci ? 0 : 1;
		if (percentage === 100) {
			writeReport(ci, totalSize, results, failed);
		}
		process.exit(exitCode);
	}
}

function parseArgs() {
	const args = argv.slice(2);
	const params = new Set();
	const opts = ["failedOnly", "all", "ci"];
	for (const arg of args) {
		for (const opt of opts) {
			if (`--${opt}`.startsWith(arg)) {
				params.add(opt);
			}
		}
	}

	if (params.size !== args.length) {
		console.log(`
        usage: ${argv[1].split("/").pop()} [--failedOnly] [--all]
        where: 
        --failedOnly will only try all APIs that have previously been found failing
        --all will test all APIs on the list, by default only ${defaultPercentage}% of APIs will be tested.
        --ci switch to ci mode
        `);
		exit(1);
	}
	return params;
}

const params = parseArgs();
const failedOnly = params.has("failedOnly");
const percentage = params.has("all") ? 100 : defaultPercentage;
if (params.has("ci")) {
	console.log("Working in CI mode, overwriting results if anything changed");
}
testAPIs(percentage, failedOnly, params.has("ci"));
