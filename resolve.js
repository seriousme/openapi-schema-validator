function escapeJsonPointer(str) {
  return str.replace(/~/g, "~0").replace(/\//g, "~1");
}

function unescapeJsonPointer(str) {
  return str.replace(/~1/g, "/").replace(/~0/g, "~");
}

const isObject = (obj) => typeof obj === "object" && obj !== null;
const pointerWords = new Set([
  "$ref",
  "$id",
  "$anchor",
  "$dynamicRef",
  "$dynamicAnchor",
  "$schema",
]);

function fromEntries(iterable) {
  return [...iterable].reduce((obj, [key, val]) => {
    obj[key] = val;
    return obj;
  }, {});
}

const filtered = (raw) =>
  fromEntries(Object.entries(raw).filter(([key, _]) => !pointerWords.has(key)));

function resolveUri(uri, anchors) {
  const [prefix, path] = uri.split("#", 2);
  const err = new Error(`Can't resolve ${uri}, only internal refs are supported.`);

  if (path && path.length && path[0] !== "/") {
    if (anchors[uri]) {
      return anchors[uri];
    }
    throw err;
  }

  if (!anchors[prefix]) {
    throw err;
  }
  const paths = path.split("/").slice(1);
  try {
    const result = paths.reduce(
      (o, n) => o[unescapeJsonPointer(n)],
      anchors[prefix]
    );
    if (result === undefined) {
      throw "";
    }
    return result;
  } catch (_) {
    throw err;
  }
}

function resolve(tree) {
  if (!isObject(tree)) {
    return undefined;
  }

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
  // find all refs
  parse(tree, "#", "");

  // resolve them
  const anchors = { "": tree };
  const dynamicAnchors = {};
  pointers.$id.forEach((item) => {
    const { ref, obj, path } = item;
    if (anchors[ref]) {
      throw new Error(`$id : '${ref}' defined more than once at ${path}`);
    }
    anchors[ref] = obj;
  });

  pointers.$anchor.forEach((item) => {
    const { ref, obj, path, id } = item;
    const fullRef = `${id}#${ref}`;
    if (anchors[fullRef]) {
      throw new Error(`$anchor : '${ref}' defined more than once at '${path}'`);
    }
    anchors[fullRef] = obj;
  });

  pointers.$dynamicAnchor.forEach((item) => {
    const { ref, obj, path } = item;
    if (dynamicAnchors[`#${ref}`]) {
      throw new Error(
        `$dynamicAnchor : '${ref}' defined more than once at '${path}'`
      );
    }
    dynamicAnchors[`#${ref}`] = obj;
  });

  pointers.$ref.forEach((item) => {
    const { ref, obj, prop, id } = item;
    delete obj[prop];
    const decodedRef = decodeURIComponent(ref);
    const fullRef = decodedRef[0] !== "#" ? decodedRef : `${id}${decodedRef}`;
    Object.assign(obj, filtered(resolveUri(fullRef, anchors)));
  });

  pointers.$dynamicRef.forEach((item) => {
    const { ref, obj, prop } = item;
    if (!dynamicAnchors[ref]) {
      throw new Error(`Can't resolve $dynamicAnchor : '${ref}'`);
    }
    delete obj[prop];
    Object.assign(obj, filtered(dynamicAnchors[ref]));
  });

  return tree;
}

module.exports = { resolve };
