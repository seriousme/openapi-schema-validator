import {Options, ErrorObject} from "ajv"
export class Validator {
    static supportedVersions: Set<string>;
    constructor(ajvOptions?: Options);
    resolveRefs(opts?: {
        specification?: object
    }): object;
    validate(schema: object | string): Promise<{
        valid: boolean;
        errors?: ErrorObject[];
    }>;
    specification: object;
    version: string;
}
