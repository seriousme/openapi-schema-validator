const { Console } = require("console");
const fs = require("fs");
const openApiSrcDir = `${__dirname}/../schemas.orig`;
const openApiDestDir = `${__dirname}/../schemas`;
const version = "3.1";
const destFilePath = `${openApiDestDir}/v${version}/schema.json`;

function readJSON(file) {
  return JSON.parse(fs.readFileSync(file));
}

function getLatestSchema(version) {
  const srcPath = `${openApiSrcDir}/${version}/schema/`
  const schemaList =  fs.readdirSync(srcPath);
  const lastSchema = schemaList.pop();
  const schema = readJSON(`${srcPath}/${lastSchema}`);
  return schema;
}

function escapeJsonPointer(str) {
  return str.replace(/~/g, "~0").replace(/\//g, "~1");
}

function unescapeJsonPointer(str) {
  return str.replace(/~1/g, "/").replace(/~0/g, "~");
}

const isObject = (obj) => typeof obj === "object" && obj !== null;

const pointerWords = new Set(["$dynamicRef", "$dynamicAnchor"]);

const pointers = {};
pointerWords.forEach((word) => (pointers[word] = []));

function parse(obj, path, id) {
  if (!isObject(obj)) {
    return;
  }
  if (obj.$id) {
    id = obj.$id;
  }
  for (const prop in obj) {
    if (pointerWords.has(prop)) {
      pointers[prop].push({ ref: obj[prop], obj, prop, path, id });
    }
    parse(obj[prop], `${path}/${escapeJsonPointer(prop)}`, id);
  }
}
const schema = getLatestSchema(version);
// find all refs
parse(schema, "#", "");
const dynamicAnchors = {};
pointers.$dynamicAnchor.forEach((item) => {
  const { ref, prop, path } = item;
  console.log({ ref, prop, path });
  dynamicAnchors[`#${ref}`] = path;
});
pointers.$dynamicRef.forEach((item) => {
  const { ref, obj, prop, path } = item;
  if (!dynamicAnchors[ref]) {
    throw `Can't find $dynamicAnchor for '${ref}'`;
  }
  console.log({ ref, prop, path, newRef: dynamicAnchors[ref] });
  delete obj[prop];
  obj.$ref = dynamicAnchors[ref];
});

fs.writeFileSync(
  `${destFilePath}`,
  JSON.stringify(schema, null, 2),
);
console.log(`Written converted schema to ${destFilePath}`);
console.log(`$id: ${schema.$id}`);
