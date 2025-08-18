/**
 * @param {string} str
 * @returns {string}
 */
function escapeJsonPointer(str) {
	return str.replace(/~/g, "~0").replace(/\//g, "~1");
}

/**
 * @param {string} str
 * @returns {string}
 */
function unescapeJsonPointer(str) {
	return str.replace(/~1/g, "/").replace(/~0/g, "~");
}

/**
 * @typedef {Record<string, unknown>} RecordStringUnknown
 */

/**
 * @param {unknown} obj
 * @returns {obj is RecordStringUnknown}
 */
const isObject = (obj) => typeof obj === "object" && obj !== null;

const pointerWords = new Set(
	/** @type {const} */ ([
		"$ref",
		"$id",
		"$anchor",
		"$dynamicRef",
		"$dynamicAnchor",
		"$schema",
	]),
);

/**
 * @template T
 * @typedef {T extends Set<infer U> ? U : never} SetValue
 */

/**
 * @typedef {SetValue<typeof pointerWords>} PointerWord
 */

/**
 *
 * @param {string} uri
 * @param {Partial<Record<string, RecordStringUnknown>>} anchors
 * @returns {Record<string, unknown>}
 */
function resolveUri(uri, anchors) {
	const [prefix, path] = /** @type {[string, string?]} */ (uri.split("#", 2));
	const hashPresent = !!path;
	const err = new Error(
		`Can't resolve ${uri}${
			prefix ? ", only internal refs are supported." : ""
		}`,
	);

	if (hashPresent && path[0] !== "/") {
		if (anchors[uri]) {
			return anchors[uri];
		}
		throw err;
	}

	if (!anchors[prefix]) {
		throw err;
	}

	if (!hashPresent) {
		return anchors[prefix];
	}

	const paths = path.split("/").slice(1);
	try {
		const result = paths.reduce(
			/**
			 * @param {RecordStringUnknown} o
			 * @param {string} n
			 * @returns {RecordStringUnknown}
			 */
			(o, n) => /** @type {RecordStringUnknown} */ (o[unescapeJsonPointer(n)]),
			anchors[prefix],
		);

		if (result === undefined) {
			throw "";
		}
		return result;
	} catch (_) {
		throw err;
	}
}

/**
 * @param {unknown} tree
 * @returns {RecordStringUnknown | undefined}
 */
export function replaceRefs(tree) {
	return resolve(tree, true);
}

/**
 * @param {RecordStringUnknown} tree
 * @returns {{ valid: boolean; errors?: string }}
 */
export function checkRefs(tree) {
	try {
		resolve(tree, false);
		return { valid: true };
	} catch (err) {
		return { valid: false, errors: /** @type {Error} */ (err).message };
	}
}

/**
 * @param {unknown} tree
 * @param {boolean} replace
 * @returns {RecordStringUnknown | undefined}
 */
function resolve(tree, replace) {
	let treeObj = /** @type {RecordStringUnknown} */ (tree);
	if (!isObject(tree)) {
		return undefined;
	}

	if (replace === false) {
		treeObj = structuredClone(tree);
	}

	/**
	 * @typedef {{
	 * 	ref: string;
	 * 	obj: RecordStringUnknown;
	 * 	prop: PointerWord;
	 * 	path: string;
	 *  id: string;
	 * }} PointerData
	 */

	const pointers =
		/** @type { Record<PointerWord, Array<PointerData>> } */ ({});
	for (const word of pointerWords) {
		pointers[word] = [];
	}

	/**
	 * @param {string} path
	 * @param {RecordStringUnknown} target
	 */
	function applyRef(path, target) {
		let root = treeObj;
		const paths = path.split("/").slice(1);
		const prop = paths.pop();
		for (const p of paths) {
			root = /** @type {RecordStringUnknown} */ (root[unescapeJsonPointer(p)]);
		}
		if (typeof prop !== "undefined") {
			root[unescapeJsonPointer(prop)] = target;
		} else {
			treeObj = target;
		}
	}

	/**
	 * @param {RecordStringUnknown} obj
	 * @param {string} path
	 * @param {string} id
	 * @returns {void}
	 */
	function parse(obj, path, id) {
		if (!isObject(obj)) {
			return;
		}

		const objId = /** @type {string} */ (obj["$id"]) || id;
		for (const prop in obj) {
			if (pointerWords.has(/** @type {PointerWord} */ (prop))) {
				const pointerWord = /** @type {PointerWord} */ (prop);
				pointers[pointerWord].push({
					ref: /** @type {string} */ (obj[prop]),
					obj,
					prop: pointerWord,
					path,
					id: objId,
				});
				delete obj[prop];
			}
			parse(
				/** @type {RecordStringUnknown} */ (obj[prop]),
				`${path}/${escapeJsonPointer(prop)}`,
				objId,
			);
		}
	}
	// find all refs
	parse(treeObj, "#", "");

	// resolve them
	/** @type {Partial<Record<string, RecordStringUnknown>>} */
	const anchors = { "": treeObj };
	/** @type {Partial<Record<string, RecordStringUnknown>>} */
	const dynamicAnchors = {};

	for (const item of pointers.$id) {
		const { ref, obj, path } = item;
		if (anchors[ref]) {
			throw new Error(`$id : '${ref}' defined more than once at ${path}`);
		}
		anchors[ref] = obj;
	}

	for (const item of pointers.$anchor) {
		const { ref, obj, path, id } = item;
		const fullRef = `${id}#${ref}`;
		if (anchors[fullRef]) {
			throw new Error(`$anchor : '${ref}' defined more than once at '${path}'`);
		}
		anchors[fullRef] = obj;
	}

	for (const item of pointers.$dynamicAnchor) {
		const { ref, obj, path } = item;
		if (dynamicAnchors[`#${ref}`]) {
			throw new Error(
				`$dynamicAnchor : '${ref}' defined more than once at '${path}'`,
			);
		}
		dynamicAnchors[`#${ref}`] = obj;
	}

	for (const item of pointers.$ref) {
		const { ref, id, path } = item;
		const decodedRef = decodeURIComponent(ref);
		const fullRef = decodedRef[0] !== "#" ? decodedRef : `${id}${decodedRef}`;
		applyRef(path, resolveUri(fullRef, anchors));
	}

	for (const item of pointers.$dynamicRef) {
		const { ref, path } = item;
		if (!dynamicAnchors[ref]) {
			throw new Error(`Can't resolve $dynamicAnchor : '${ref}'`);
		}
		applyRef(path, dynamicAnchors[ref]);
	}

	return treeObj;
}
