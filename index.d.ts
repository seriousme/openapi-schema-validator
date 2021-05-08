export default class Validator {
    static supportedVersions: Set<string>;
    constructor(ajvOptions?: {
        strict: boolean;
        validateFormats: boolean;
    });
    resolveRefs(opts?: {
        specification?: object
    }): object;
    validate(schema: object | string): Promise<{
        valid: boolean;
        errors?: any
    }>;
    specification: object;
    version: string;
}
