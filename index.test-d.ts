import type { ErrorObject } from "ajv";
import { expectTypeOf } from "expect-type";
import { Validator } from "./index.js";

// Test static property
expectTypeOf(Validator)
	.toHaveProperty("supportedVersions")
	.toEqualTypeOf<Set<string>>();

// Test constructor
expectTypeOf(Validator).toBeConstructibleWith();
expectTypeOf(Validator).toBeConstructibleWith({ allErrors: true });
expectTypeOf(Validator).toBeConstructibleWith({ strict: "log" });
expectTypeOf(Validator).toBeConstructibleWith({ strict: false });
/** @see Validator constructor comment about ajv `strict` option */
// @ts-expect-error
expectTypeOf(Validator).toBeConstructibleWith({ strict: true });

const someCondition: boolean = true;
expectTypeOf(Validator).toBeConstructibleWith({
	strict: someCondition ? "log" : false,
});

// Test instance methods
interface ValidationResult {
	valid: boolean;
	errors?: Array<ErrorObject> | string;
}

expectTypeOf(Validator)
	.instance.toHaveProperty("validate")
	.toBeCallableWith({})
	.toBeCallableWith("spec.yaml")
	.returns.resolves.toEqualTypeOf<ValidationResult>();

expectTypeOf(Validator)
	.instance.toHaveProperty("validateBundle")
	.toBeCallableWith([{}])
	.toBeCallableWith(["spec.yaml"])
	.returns.resolves.toEqualTypeOf<ValidationResult>();

expectTypeOf(Validator)
	.instance.toHaveProperty("addSpecRef")
	.toBeCallableWith({}, "http://example.com")
	.toBeCallableWith("spec.yaml", "http://example.com")
	.returns.resolves.toBeVoid();

expectTypeOf(Validator)
	.instance.toHaveProperty("resolveRefs")
	.toBeCallableWith()
	.toBeCallableWith({ specification: {} })
	.returns.toBeObject();

// Test instance properties
expectTypeOf(Validator).instance.toHaveProperty("specification").toBeObject();
expectTypeOf(Validator).instance.toHaveProperty("version").toBeString();
