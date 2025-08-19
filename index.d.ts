import type { ErrorObject, Options } from "ajv";

interface ValidatorOptions extends Omit<Options, "strict"> {
	strict?: Extract<Options["strict"], false | "log">;
}

type SpecData = Record<string, unknown>;

export class Validator {
	static supportedVersions: Set<string>;
	constructor(ajvOptions?: ValidatorOptions);
	resolveRefs(opts?: { specification?: SpecData }): SpecData;
	validate(schema: SpecData | string): Promise<{
		valid: boolean;
		errors?: Array<ErrorObject> | string;
	}>;
	validateBundle(schema: Array<SpecData | string>): Promise<{
		valid: boolean;
		errors?: Array<ErrorObject> | string;
	}>;
	addSpecRef(schema: SpecData | string, uri: string): Promise<void>;
	specification: SpecData;
	version: string;
}
