import Ajv04 from "ajv-draft-04";
import addFormats from "ajv-formats";
import Ajv2020 from "ajv/dist/2020.js";
import { JSON_SCHEMA, load } from "js-yaml";
import { readFile } from "node:fs/promises";
import { checkRefs, replaceRefs } from "./resolve.js";
import v2_0 from "./schemas/v2.0/schema.json" assert { type: "json" };
import v3_0 from "./schemas/v3.0/schema.json" assert { type: "json" };
import v3_1 from "./schemas/v3.1/schema.json" assert { type: "json" };

const openApiVersions = new Set(["2.0", "3.0", "3.1"]);
const ajvVersions = {
	"http://json-schema.org/draft-04/schema#": Ajv04,
	"https://json-schema.org/draft/2020-12/schema": Ajv2020,
};
const inlinedRefs = "x-inlined-refs";

export function getSchema(version) {
	switch (version) {
		case "2.0":
			return v2_0;
		case "3.0":
			return v3_0;
		case "3.1":
			return v3_1;
		default:
			throw new Error("Failed to determine version of OAS");
	}
}

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

async function getSpecFromData(data) {
	const yamlOpts = { schema: JSON_SCHEMA };
	if (typeof data === "object") {
		return data;
	}
	if (typeof data === "string") {
		if (data.match(/\n/)) {
			try {
				return load(data, yamlOpts);
			} catch (_) {
				return undefined;
			}
		}
		try {
			const fileData = await readFile(data, "utf-8");
			return load(fileData, yamlOpts);
		} catch (_) {
			return undefined;
		}
	}
	return undefined;
}

export class Validator {
	constructor(ajvOptions = {}) {
		// AJV is a bit too strict in its strict validation of openAPI schemas
		// so switch strict mode and validateFormats off
		if (ajvOptions.strict !== "log") {
			ajvOptions.strict = false;
		}
		this.ajvOptions = ajvOptions;
		this.ajvValidators = {};
		this.externalRefs = {};
	}

	static supportedVersions = openApiVersions;

	resolveRefs(opts = {}) {
		return replaceRefs(this.specification || opts.specification);
	}

	async addSpecRef(data, uri) {
		const spec = await getSpecFromData(data);
		if (spec === undefined) {
			throw new Error("Cannot find JSON, YAML or filename in data");
		}

		const newUri = uri || spec["$id"];
		if (typeof newUri !== "string") {
			throw new Error("uri parameter or $id attribute must be a string");
		}

		spec["$id"] = newUri;
		this.externalRefs[newUri] = spec;
	}

	async validate(data) {
		const specification = await getSpecFromData(data);
		this.specification = specification;
		if (specification === undefined || specification === null) {
			return {
				valid: false,
				errors: "Cannot find JSON, YAML or filename in data",
			};
		}
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
		const result = {
			valid: schemaResult,
		};
		if (validateSchema.errors) {
			result.errors = validateSchema.errors;
		}
		return result;
	}

	async validateBundle(data) {
		let specification = undefined;
		if (!Array.isArray(data)) {
			return {
				valid: false,
				errors: "Parameter data must be an array",
			};
		}
		for (const item of data) {
			const spec = await getSpecFromData(item);
			let fileName = undefined;
			if (typeof item === "string" && !item.match(/\n/)) {
				// item is a filename
				fileName = item;
			}
			if (spec === undefined) {
				throw new Error(
					`Cannot find JSON, YAML or filename in ${fileName || "data"}`,
				);
			}
			const { version } = getOpenApiVersion(spec);
			if (!version) {
				// it is not the main openApi specification, but a subschema
				this.addSpecRef(spec, spec.$id || fileName);
				continue;
			}
			if (specification) {
				throw new Error(
					"Only one openApi specification can be validated at a time",
				);
			}
			specification = spec;
		}
		return this.validate(specification);
	}

	getAjvValidator(version) {
		if (!this.ajvValidators[version]) {
			const schema = getSchema(version);
			const schemaVersion = schema.$schema;
			const AjvClass = ajvVersions[schemaVersion];
			const ajv = new AjvClass(this.ajvOptions);
			addFormats(ajv);
			ajv.addFormat("media-range", true); // used in 3.1
			this.ajvValidators[version] = ajv.compile(schema);
		}
		return this.ajvValidators[version];
	}
}
