import { strict as assert } from "node:assert/strict";
import { test } from "node:test";
import { Validator } from "../index.js";

const validator = new Validator();
const resolve = (specification) => validator.resolveRefs({ specification });

test("non object returns undefined", async (t) => {
	const schema = "schema";
	const res = resolve(schema);
	assert.equal(res, undefined);
});

test("Local $refs", async (t) => {
	const schema = {
		$id: "http://www.example.com/",
		$schema: "http://json-schema.org/draft-07/schema#",

		definitions: {
			address: {
				type: "object",
				properties: {
					street_address: { type: "string" },
					city: { type: "string" },
					state: { type: "string" },
					subAddress: { $ref: "http://www.example.com/#/definitions/address" },
				},
			},
			req: { required: ["billing_address"] },
		},
		type: "object",
		properties: {
			billing_address: { $ref: "#/definitions/address" },
			shipping_address: { $ref: "#/definitions/address" },
		},
	};
	const res = resolve(schema);
	const ptr = res.properties.billing_address.properties;
	assert.equal(
		ptr.city.type,
		"string",
		"followed $ref without neigbor properties",
	);
	const circular = ptr.subAddress.properties;
	assert.equal(
		circular.city.type,
		"string",
		"followed circular $ref without neigbor properties",
	);
});

test("number in path", async (t) => {
	const schema = {
		$id: "http://www.example.com/",
		$schema: "http://json-schema.org/draft-07/schema#",

		definitions: {
			2: {
				required: ["billing_address"],
			},
		},
		$ref: "#/definitions/2",
	};
	const res = resolve(schema);
	assert.equal(res.required[0], "billing_address", "followed number in path");
});

test("ref to #", async (t) => {
	const schema = {
		$id: "http://www.example.com/",
		$schema: "http://json-schema.org/draft-07/schema#",

		definitions: {
			2: {
				required: ["billing_address"],
			},
		},
		$ref: "#",
	};
	const res = resolve(schema);
	assert.equal(
		res.definitions[2].required[0],
		"billing_address",
		"followed # in path",
	);
});

test("$ref to $anchor", async (t) => {
	const schema = {
		$id: "http://www.example.com/",
		$schema: "http://json-schema.org/draft-07/schema#",

		definitions: {
			req: {
				required: ["billing_address"],
				$anchor: "myAnchor",
			},
		},
		$ref: "#myAnchor",
	};
	const res = resolve(schema);
	assert.equal(res.required[0], "billing_address", "followed $ref to $anchor");
});

test("$dynamicRef to $dynamicAnchor", async (t) => {
	const schema = {
		$id: "http://www.example.com/",
		$schema: "http://json-schema.org/draft-07/schema#",

		definitions: {
			req: {
				required: ["billing_address"],
				$dynamicAnchor: "myAnchor",
			},
		},
		$dynamicRef: "#myAnchor",
	};
	const res = resolve(schema);
	assert.equal(res.required[0], "billing_address", "followed $ref to $anchor");
});

test("non-existing path throws error", async (t) => {
	const schema = {
		$id: "http://www.example.com/",
		$schema: "http://json-schema.org/draft-07/schema#",
		$ref: "#/definitions/req",
	};
	assert.throws(
		() => resolve(schema),
		new Error(
			"Can't resolve http://www.example.com/#/definitions/req, only internal refs are supported.",
		),
		"got expected error",
	);
});

test("non-existing leaf path throws error", async (t) => {
	const schema = {
		$id: "http://www.example.com/",
		$schema: "http://json-schema.org/draft-07/schema#",
		definitions: {
			req: { required: ["billing_address"] },
		},
		$ref: "#/definitions/non-existing",
	};
	assert.throws(
		() => resolve(schema),
		new Error(
			"Can't resolve http://www.example.com/#/definitions/non-existing, only internal refs are supported.",
		),
		"got expected error",
	);
});

test("non-existing uri throws error", async (t) => {
	const schema = {
		$id: "http://www.example.com/",
		$schema: "http://json-schema.org/draft-07/schema#",
		definitions: {
			req: { required: ["billing_address"] },
		},
		$ref: "http://www.example.com/failed#/definitions/req",
	};
	assert.throws(
		() => resolve(schema),
		new Error(
			"Can't resolve http://www.example.com/failed#/definitions/req, only internal refs are supported.",
		),
		"got expected error",
	);
});

test("non-existing uri without path throws error", async (t) => {
	const schema = {
		$id: "http://www.example.com/",
		$schema: "http://json-schema.org/draft-07/schema#",
		definitions: {
			req: { required: ["billing_address"] },
		},
		$ref: "http://www.example.com/failed",
	};
	assert.throws(
		() => resolve(schema),
		new Error(
			"Can't resolve http://www.example.com/failed, only internal refs are supported.",
		),
		"got expected error",
	);
});

test("non-existing $anchor throws error", async (t) => {
	const schema = {
		$id: "http://www.example.com/",
		$schema: "http://json-schema.org/draft-07/schema#",
		$ref: "#undefinedAnchor",
	};
	assert.throws(
		() => resolve(schema),
		new Error(
			"Can't resolve http://www.example.com/#undefinedAnchor, only internal refs are supported.",
		),
		"got expected error",
	);
});

test("non-existing $dynamicAnchor throws error", async (t) => {
	const schema = {
		$id: "http://www.example.com/",
		$schema: "http://json-schema.org/draft-07/schema#",
		$dynamicRef: "#undefinedAnchor",
	};
	assert.throws(
		() => resolve(schema),
		new Error("Can't resolve $dynamicAnchor : '#undefinedAnchor'"),
		"got expected error",
	);
});

test("non-unique $id throws error", async (t) => {
	const schema = {
		$id: "http://www.example.com/",
		$schema: "http://json-schema.org/draft-07/schema#",
		definitions: {
			$id: "http://www.example.com/",
		},
	};
	assert.throws(
		() => resolve(schema),
		new Error(
			"$id : 'http://www.example.com/' defined more than once at #/definitions",
		),
		"got expected error",
	);
});

test("non-unique $anchor throws error", async (t) => {
	const schema = {
		$id: "http://www.example.com/",
		$schema: "http://json-schema.org/draft-07/schema#",
		definitions: {
			anchor_A: { $anchor: "#myAnchor" },
			anchor_B: { $anchor: "#myAnchor" },
		},
	};
	assert.throws(
		() => resolve(schema),
		new Error(
			"$anchor : '#myAnchor' defined more than once at '#/definitions/anchor_B'",
		),
		"got expected error",
	);
});

test("non-unique $dynamicAnchor throws error", async (t) => {
	const schema = {
		$id: "http://www.example.com/",
		$schema: "http://json-schema.org/draft-07/schema#",
		definitions: {
			anchor_A: { $dynamicAnchor: "#myAnchor" },
			anchor_B: { $dynamicAnchor: "#myAnchor" },
		},
	};
	assert.throws(
		() => resolve(schema),
		new Error(
			"$dynamicAnchor : '#myAnchor' defined more than once at '#/definitions/anchor_B'",
		),
		"got expected error",
	);
});

test("correctly URL encoded URI", async (t) => {
	const schema = {
		$id: "http://www.example.com/",
		$schema: "http://json-schema.org/draft-07/schema#",

		definitions: {
			"/path{id}": {
				required: ["billing_address"],
			},
		},
		$ref: "%23%2Fdefinitions%2F~1path%7Bid%7D", // "#/definitions/~1path{id}"
	};
	const res = resolve(schema);
	assert.equal(
		res.required[0],
		"billing_address",
		"followed $ref to URL encoded path",
	);
});

test("incorrectly URL encoded URI also works (normally blocked by schema format)", async (t) => {
	const schema = {
		$id: "http://www.example.com/",
		$schema: "http://json-schema.org/draft-07/schema#",

		definitions: {
			"/path{id}": {
				required: ["billing_address"],
			},
		},
		$ref: "#/definitions/~1path{id}",
	};
	const res = resolve(schema);
	assert.equal(
		res.required[0],
		"billing_address",
		"followed $ref to URL encoded path",
	);
});
