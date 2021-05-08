import Ajv from 'ajv';
import Ajv2020 from 'ajv/dist/2020.js';
import { createRequire } from 'module';
import JSYaml from 'js-yaml';
import { readFile, stat } from 'fs/promises'
import { resolve } from './resolve.js'


const importJSON = createRequire(import.meta.url);

const openApiVersions = new Set(['2.0', '3.0', '3.1']);
const ajvVersions = {
    "http://json-schema.org/draft-07/schema": Ajv,
    "https://json-schema.org/draft/2020-12/schema": Ajv2020
}

const openApiSchemas = {};

function getOpenApiVersion(specification) {
    for (const version of openApiVersions) {
        const prop = specification[(version == "2.0") ? 'swagger' : 'openapi'];
        if (typeof prop === "string" && prop.startsWith(version)) {
            return version
        }
    }
    return undefined
}

async function getSpecFromData(data) {
    if (typeof data === 'object') {
        return data;
    }
    if (typeof data === 'string') {
        if (data.match(/\n/)) {
            try {
                return JSYaml.load(data);
            }
            catch (_) {
                return undefined
            };
        }
        try {
            const fileData = await readFile(data, "utf-8");
            return JSYaml.load(fileData);
        } catch (_) {
            return undefined;
        }
    }
}


export default class Validator {
    constructor(ajvOptions = { strict: false, validateFormats: false }) {
        this.ajvOptions = ajvOptions;
        return this;
    }

    resolveRefs(opts={}){
        return resolve(this.specification || opts.specification)
    }

    static supportedVersions = openApiVersions;

    async validate(data) {
        const specification = await getSpecFromData(data);
        this.specification = specification;
        if (specification === undefined || specification === null) {
            return {
                valid: false,
                errors: "Cannot find JSON, YAML or filename in data"
            };
        }
        const version = getOpenApiVersion(specification);
        this.version = version;
        if (!version) {
            return {
                valid: false,
                errors: "Cannot find supported swagger/openapi version in specification, version must be a string."
            };
        }
        const schema = await importJSON(`./schemas/v${version}/schema.json`);
        const schemaVersion = schema.$schema;
        const AjvClass = ajvVersions[schemaVersion];
        const ajv = new AjvClass(this.ajvOptions);
        const validate = ajv.compile(schema);
        const result = {
            valid: validate(specification)
        };
        if (validate.errors) {
            result.errors = validate.errors
        }
        return result
    }
}