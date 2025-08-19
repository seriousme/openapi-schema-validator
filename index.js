import { readFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { fileURLToPath, URL } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import Ajv04 from "ajv-draft-04";
import addFormatsModule from "ajv-formats";
import { JSON_SCHEMA, load } from "js-yaml";
import { checkRefs, replaceRefs } from "./resolve.js";

/** @typedef {import("ajv/dist/core.js").default} AjvCore */
/** @typedef {typeof import("ajv/dist/core.js").default} AjvCoreConstructor */

/** @typedef {import("./index.js").Validator} ValidatorDecl */
/** @typedef {import("./index.js").SpecData} SpecData */

// ajv-formats is a CommonJS module,
// so we need to access its default property to get the correct typed value
const { default: addFormats } = addFormatsModule;

const openApiVersions = new Set(["2.0", "3.0", "3.1"]);

/** @type {Partial<Record<string, AjvCoreConstructor>>} */
const ajvVersions = {
	// @ts-expect-error using pure typescript doesn't produce an error
	"http://json-schema.org/draft-04/schema#": Ajv04,
	// @ts-expect-error using pure  typescript doesn't produce an error
	"https://json-schema.org/draft/2020-12/schema": Ajv2020,
};

const inlinedRefs = "x-inlined-refs";

/**
 * @param {string} fileName
 * @returns {string}
 */
function localFile(fileName) {
	return fileURLToPath(new URL(fileName, import.meta.url));
}

/**
 * @param {string} file
 * @returns {{ $schema: string, [x: string]: unknown }}
 */
function importJSON(file) {
	return JSON.parse(readFileSync(localFile(file), "utf-8"));
}

/**
 *
 * @param {{ swagger?: string, openapi?: string }} specification
 * @returns {{
 * 	version: string,
 * 	specificationType: 'swagger' | 'openapi',
 *  specificationVersion: string,
 * } | {
 * 	version: undefined,
 * 	specificationType: undefined,
 *  specificationVersion: undefined,
 * }}
 */
function getOpenApiVersion(specification) {
	for (const version of openApiVersions) {
		const specificationType = version === "2.0" ? "swagger" : "openapi";
		const prop = specification[specificationType];
		if (typeof prop === "string" && prop.startsWith(version)) {
			return {
				version,
				specificationType,
				specificationVersion: prop,
			};
		}
	}
	return {
		version: undefined,
		specificationType: undefined,
		specificationVersion: undefined,
	};
}

/**
 * @typedef {SpecData} SpecFromData
 */

/**
 * @param {unknown} data
 * @returns {Promise<{ loaded: true; fileName: string | null; spec: SpecFromData} | { loaded: false; errorMessage: string }>}
 */
async function loadSpecFromData(data) {
	if (typeof data === "object") {
		return {
			loaded: true,
			fileName: null,
			spec: /** @type {SpecFromData} */ (data),
		};
	}

	if (typeof data !== "string") {
		return {
			loaded: false,
			errorMessage: `Invalid input type. Expected "string" or "object", but got "${typeof data}"`,
		};
	}

	/** @type {string} */
	let sourceData = data;
	/** @type {string | null} */
	let fileName = null;
	// If string doesn't contains \n assuming is a file path
	if (!sourceData.match(/\n/)) {
		try {
			sourceData = await readFile(data, "utf-8");
			fileName = data;
		} catch (_) {
			return {
				loaded: false,
				errorMessage: `Could not read file "${data}"`,
			};
		}
	}

	try {
		return {
			loaded: true,
			fileName,
			spec: /** @type {SpecFromData} */ (
				load(sourceData, { schema: JSON_SCHEMA })
			),
		};
	} catch (_) {
		return {
			loaded: false,
			errorMessage: "Failed to parse input as YAML/JSON",
		};
	}
}

export class Validator {
	/**
	 * @param {import('./index.js').ValidatorOptions} ajvOptions
	 */
	constructor(ajvOptions = {}) {
		// AJV is a bit too strict in its strict validation of openAPI schemas
		// so switch strict mode and validateFormats off
		if (ajvOptions.strict !== "log") {
			ajvOptions.strict = false;
		}
		this.ajvOptions = ajvOptions;
		/** @type {Partial<Record<string, ReturnType<AjvCore['compile']>>>} */
		this.ajvValidators = {};
		/** @type {Record<string, unknown>} */
		this.externalRefs = {};
	}

	static supportedVersions = openApiVersions;

	/** @type {ValidatorDecl['resolveRefs']} */
	resolveRefs(opts = {}) {
		return /** @type {SpecData} */ (
			replaceRefs(this.specification || opts.specification)
		);
	}

	/** @type {ValidatorDecl['addSpecRef']} */
	async addSpecRef(data, uri) {
		const specResult = await loadSpecFromData(data);
		if (!specResult.loaded) {
			throw new Error(specResult.errorMessage);
		}

		const { spec } = specResult;

		const newUri = uri || spec["$id"];
		if (typeof newUri !== "string") {
			throw new Error("uri parameter or $id attribute must be a string");
		}

		spec["$id"] = newUri;
		this.externalRefs[newUri] = spec;
	}

	/** @type {ValidatorDecl['validate']} */
	async validate(data) {
		const specResult = await loadSpecFromData(data);

		if (!specResult.loaded) {
			return {
				valid: false,
				errors: specResult.errorMessage,
			};
		}
		const { spec: specification } = specResult;
		this.specification = specification;

		if (Object.keys(this.externalRefs).length > 0) {
			specification[inlinedRefs] = this.externalRefs;
		}
		const { version, specificationType, specificationVersion } =
			getOpenApiVersion(specification);
		this.version = version;
		this.specificationVersion = specificationVersion;
		this.specificationType = specificationType;
		if (!version) {
			return {
				valid: false,
				errors:
					"Cannot find supported swagger/openapi version in specification, version must be a string.",
			};
		}
		const validateSchema = this.getAjvValidator(version);
		// check if the specification matches the JSONschema
		const schemaResult = validateSchema(specification);
		// check if the references are valid as those can't be validated bu JSONschema
		if (schemaResult) {
			return checkRefs(specification);
		}

		/** @type {Awaited<ReturnType<ValidatorDecl['validate']>>} */
		const result = {
			valid: false,
		};

		if (validateSchema.errors) {
			result.errors = validateSchema.errors;
		}

		return result;
	}

	/** @type {ValidatorDecl['validateBundle']} */
	async validateBundle(data) {
		if (!Array.isArray(data)) {
			return {
				valid: false,
				errors: "Parameter data must be an array",
			};
		}

		/** @type {SpecFromData | undefined} */
		let specification;

		for (const item of data) {
			const specResult = await loadSpecFromData(item);
			if (!specResult.loaded) {
				throw new Error(specResult.errorMessage);
			}

			const { spec, fileName } = specResult;
			const { version } = getOpenApiVersion(spec);
			if (!version) {
				const uri = /** @type {string} */ (spec["$id"] || fileName);
				// it is not the main openApi specification, but a sub-schema
				this.addSpecRef(spec, uri);
				continue;
			}

			if (specification) {
				throw new Error(
					"Only one openApi specification can be validated at a time",
				);
			}
			specification = spec;
		}
		return this.validate(/** @type {SpecFromData} */ (specification));
	}

	/**
	 * @param {string} version
	 * @returns {ReturnType<AjvCore['compile']>}
	 */
	getAjvValidator(version) {
		if (!this.ajvValidators[version]) {
			const schema = importJSON(`./schemas/v${version}/schema.json`);
			const schemaVersion = schema.$schema;
			const AjvClass = /** @type {AjvCoreConstructor} */ (
				ajvVersions[schemaVersion]
			);
			const ajv = new AjvClass(this.ajvOptions);
			addFormats(ajv);
			ajv.addFormat("media-range", true); // used in 3.1
			this.ajvValidators[version] = ajv.compile(schema);
		}
		return this.ajvValidators[version];
	}
}
