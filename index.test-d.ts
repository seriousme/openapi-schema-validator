import type { ErrorObject } from "ajv";
import { expectType } from "tsd";
import { Validator } from "./index.js";

// Test static property
expectType<Set<string>>(Validator.supportedVersions);

// Test constructor
expectType<Validator>(new Validator());
expectType<Validator>(new Validator({ allErrors: true }));

// Test instance methods
const validator = new Validator();

expectType<Promise<{ valid: boolean; errors?: ErrorObject[] | string }>>(
	validator.validate({}),
);
expectType<Promise<{ valid: boolean; errors?: ErrorObject[] | string }>>(
	validator.validate("spec.yaml"),
);

expectType<Promise<{ valid: boolean; errors?: ErrorObject[] | string }>>(
	validator.validateBundle([{}]),
);
expectType<Promise<{ valid: boolean; errors?: ErrorObject[] | string }>>(
	validator.validateBundle(["spec.yaml"]),
);

expectType<Promise<void>>(validator.addSpecRef({}, "http://example.com"));
expectType<Promise<void>>(
	validator.addSpecRef("spec.yaml", "http://example.com"),
);

expectType<object>(validator.resolveRefs());
expectType<object>(validator.resolveRefs({ specification: {} }));

// Test instance properties
expectType<object>(validator.specification);
expectType<string>(validator.version);
