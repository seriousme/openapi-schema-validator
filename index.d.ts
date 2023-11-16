import { ErrorObject, Options } from "ajv";
export class Validator {
	static supportedVersions: Set<string>;
	constructor(ajvOptions?: Options);
	resolveRefs(opts?: {
		specification?: object;
	}): object;
	validate(schema: object | string): Promise<{
		valid: boolean;
		errors?: ErrorObject[] | string;
	}>;
	addSpecRef(schema: object | string, uri: string): Promise<void>;
	specification: object;
	version: string;
}
