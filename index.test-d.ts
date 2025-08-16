import type { ErrorObject } from "ajv";
import { expectError, expectType } from "tsd";
import { Validator } from "./index.js";

// Test static property
expectType<Set<string>>(Validator.supportedVersions);

// Test constructor
expectType<Validator>(new Validator());
expectType<Validator>(new Validator({ allErrors: true }));
expectType<Validator>(new Validator({ strict: "log" }));
expectType<Validator>(new Validator({ strict: false }));

const someCondition: boolean = true;
expectType<Validator>(new Validator({ strict: someCondition ? "log" : false }));

expectError<Validator>(new Validator({ strict: true }));

// Test instance methods
const validator = new Validator();

interface ValidationResult {
	valid: boolean;
	errors?: ErrorObject[] | string;
}

expectType<Promise<ValidationResult>>(validator.validate({}));
expectType<Promise<ValidationResult>>(validator.validate("spec.yaml"));

expectType<Promise<ValidationResult>>(validator.validateBundle([{}]));
expectType<Promise<ValidationResult>>(validator.validateBundle(["spec.yaml"]));

expectType<Promise<void>>(validator.addSpecRef({}, "http://example.com"));
expectType<Promise<void>>(
	validator.addSpecRef("spec.yaml", "http://example.com"),
);

expectType<object>(validator.resolveRefs());
expectType<object>(validator.resolveRefs({ specification: {} }));

// Test instance properties
expectType<object>(validator.specification);
expectType<string>(validator.version);
