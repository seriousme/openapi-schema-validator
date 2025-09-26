import { readdirSync, readFileSync, writeFileSync } from "node:fs";

function localPath(path) {
	return new URL(path, import.meta.url).pathname;
}
const openApiSrcDir = localPath("../schemas.orig");
const openApiDestDir = localPath("../schemas");
const versions = ["3.1", "3.2"];

function importJSON(file) {
	return JSON.parse(readFileSync(file));
}

function getLatestSchema(version) {
	const srcPath = `${openApiSrcDir}/${version}/schema/`;
	const schemaList = readdirSync(srcPath).filter((item) => !item.match(/\./));
	const lastSchema = schemaList.pop();
	const schema = importJSON(`${srcPath}/${lastSchema}`);
	return schema;
}

function escapeJsonPointer(str) {
	return str.replace(/~/g, "~0").replace(/\//g, "~1");
}

const isObject = (obj) => typeof obj === "object" && obj !== null;

const pointerWords = new Set(["$dynamicRef", "$dynamicAnchor"]);

const pointers = {};
for (const word of pointerWords) {
	pointers[word] = [];
}

function parse(obj, path, id) {
	if (!isObject(obj)) {
		return;
	}
	const objId = obj.$id || id;

	for (const prop in obj) {
		if (pointerWords.has(prop)) {
			pointers[prop].push({ ref: obj[prop], obj, prop, path, objId });
		}
		parse(obj[prop], `${path}/${escapeJsonPointer(prop)}`, objId);
	}
}

function convertSchema(version) {
	const destFilePath = `${openApiDestDir}/v${version}/schema.json`;
	const schema = getLatestSchema(version);
	// find all refs
	parse(schema, "#", "");
	const dynamicAnchors = {};
	for (const item of pointers.$dynamicAnchor) {
		const { ref, prop, path } = item;
		console.log({ ref, prop, path });
		dynamicAnchors[`#${ref}`] = path;
	}

	for (const item of pointers.$dynamicRef) {
		const { ref, obj, prop, path } = item;
		if (!dynamicAnchors[ref]) {
			throw `Can't find $dynamicAnchor for '${ref}'`;
		}
		console.log({ ref, prop, path, newRef: dynamicAnchors[ref] });
		obj[prop] = undefined;
		obj.$ref = dynamicAnchors[ref];
	}

	writeFileSync(`${destFilePath}`, JSON.stringify(schema, null, "\t"));
	console.log(`Written converted schema to ${destFilePath}`);
	console.log(`$id: ${schema.$id}`);
}

for (const version of versions) {
	convertSchema(version);
}
