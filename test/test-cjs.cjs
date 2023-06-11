const { test } = require("node:test");
const { strict: assert } = require("node:assert/strict");

test("test common JS", async (t) => {
	const { Validator } = await import("../index.js");
	assert.equal(Validator.supportedVersions instanceof Set, true);
});
