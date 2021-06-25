const Ajv = require("ajv");
const Ajv2020 = require("ajv/dist/2020.js");
const JSYaml = require("js-yaml");
const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);

const { resolve } = require("./resolve.js");

const openApiVersions = new Set(["2.0", "3.0", "3.1"]);
const ajvVersions = {
  "http://json-schema.org/draft-07/schema": Ajv,
  "https://json-schema.org/draft/2020-12/schema": Ajv2020,
};

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
  const yamlOpts = { schema: JSYaml.JSON_SCHEMA };
  if (typeof data === "object") {
    return data;
  }
  if (typeof data === "string") {
    if (data.match(/\n/)) {
      try {
        return JSYaml.load(data, yamlOpts);
      } catch (_) {
        return undefined;
      }
    }
    try {
      const fileData = await readFile(data, "utf-8");
      return JSYaml.load(fileData, yamlOpts);
    } catch (_) {
      return undefined;
    }
  }
  return undefined;
}

class Validator {
  constructor(ajvOptions = {}) {
    // AJV is a bit too strict in its strict validation of openAPI schemas
    // so switch strict mode and validateFormats off
    if (ajvOptions.strict !== "log") {
      ajvOptions.strict = false;
    }
    ajvOptions.validateFormats = false;
    this.ajvOptions = ajvOptions;
    return this;
  }

  resolveRefs(opts = {}) {
    return resolve(this.specification || opts.specification);
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
    const version = getOpenApiVersion(specification);
    this.version = version;
    if (!version) {
      return {
        valid: false,
        errors:
          "Cannot find supported swagger/openapi version in specification, version must be a string.",
      };
    }
    const schema = require(`./schemas/v${version}/schema.json`);
    const schemaVersion = schema.$schema;
    const AjvClass = ajvVersions[schemaVersion];
    const ajv = new AjvClass(this.ajvOptions);
    const validate = ajv.compile(schema);
    const result = {
      valid: validate(specification),
    };
    if (validate.errors) {
      result.errors = validate.errors;
    }
    return result;
  }
}

Validator.supportedVersions = openApiVersions;
module.exports = Validator;
