import { fileURLToPath, URL } from "url";
import Ajv04 from "ajv-draft-04";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { JSON_SCHEMA, load } from "js-yaml";
import { readFileSync } from "fs";
import { readFile } from "fs/promises";
import { resolve } from "./resolve.js";

const openApiVersions = new Set(["2.0", "3.0", "3.1"]);
const ajvVersions = {
  "http://json-schema.org/draft-04/schema#": Ajv04,
  "https://json-schema.org/draft/2020-12/schema": Ajv2020,
};
const inlinedRefs = "x-inlined-refs";

function localFile(fileName) {
  return fileURLToPath(new URL(fileName, import.meta.url));
}

function importJSON(file) {
  return JSON.parse(readFileSync(localFile(file)));
}

function getOpenApiVersion(specification) {
  for (const version of openApiVersions) {
    const prop = specification[version == "2.0" ? "swagger" : "openapi"];
    if (typeof prop === "string" && prop.startsWith(version)) {
      return version;
    }
  }
  return undefined;
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
    return this;
  }

  static supportedVersions = openApiVersions;

  resolveRefs(opts = {}) {
    return resolve(this.specification || opts.specification);
  }

  async addSpecRef(data, uri) {
    const spec = await getSpecFromData(data);
    if (spec === undefined) {
      throw new Error("Cannot find JSON, YAML or filename in data");
    }
    if (uri === undefined) {
      if (spec['$id'] === undefined) {
        throw new Error("uri parameter or $id attribute must be present");
      }
      uri = spec['$id'];
    }

    if (typeof uri !== "string") {
      throw new Error("uri parameter or $id attribute must be a string");
    }
    spec["$id"] = uri;
    this.externalRefs[uri] = spec;
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
    const version = getOpenApiVersion(specification);
    this.version = version;
    if (!version) {
      return {
        valid: false,
        errors:
          "Cannot find supported swagger/openapi version in specification, version must be a string.",
      };
    }
    const validate = this.getAjvValidator(version);
    const result = {
      valid: validate(specification),
    };
    if (validate.errors) {
      result.errors = validate.errors;
    }
    return result;
  }

  getAjvValidator(version) {
    if (!this.ajvValidators[version]) {
      const schema = importJSON(`./schemas/v${version}/schema.json`);
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