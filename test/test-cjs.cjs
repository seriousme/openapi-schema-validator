const { test } = require("tap");

test("test common JS", async (t) => { 
    t.plan(1);
    const { Validator } = await (import("../index.js"));
    t.type(Validator.supportedVersions, Set);
});