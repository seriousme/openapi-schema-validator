const { Console } = require("console");
const fs = require("fs");
const openApiSrcDir = `${__dirname}/../schemas.orig`;
const openApiSchemaDir = `${__dirname}/../schemas`;
const filePath = "v3.1/schema.json";

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
const schema = require(`${openApiSrcDir}/${filePath}`);
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
  `${openApiSchemaDir}/${filePath}`,
  JSON.stringify(schema, null, 2)
);
console.log(`Written converted schema to ${openApiSchemaDir}/${filePath}`);
console.log(`$id: ${schema.$id}`);
