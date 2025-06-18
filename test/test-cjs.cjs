const { test } = require("node:test");

test("test common JS", async (t) => {
	const { Validator } = await import("../index.js");
	t.assert.equal(Validator.supportedVersions instanceof Set, true);
});
