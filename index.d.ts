import type { ErrorObject, Options } from "ajv";

interface ValidatorOptions extends Omit<Options, "strict"> {
	strict?: Extract<Options["strict"], false | "log">;
}

export class Validator {
	static supportedVersions: Set<string>;
	constructor(ajvOptions?: ValidatorOptions);
	resolveRefs(opts?: { specification?: object }): object;
	validate(schema: object | string): Promise<{
		valid: boolean;
		errors?: ErrorObject[] | string;
	}>;
	validateBundle(schema: (object | string)[]): Promise<{
		valid: boolean;
		errors?: ErrorObject[] | string;
	}>;
	addSpecRef(schema: object | string, uri: string): Promise<void>;
	specification: object;
	version: string;
}
