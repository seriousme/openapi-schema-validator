import { test } from "node:test";
import { fileURLToPath, URL } from "node:url";
import { Validator } from "../index.js";

function localFile(fileName) {
	return fileURLToPath(new URL(fileName, import.meta.url));
}

const invalidRefsSpec = localFile("./validation/invalid-refs.yaml");
const recursiveRefsSpec = localFile("./validation/openapi-recursive.v3.json");

test("invalid refs in YAML fail validation", async (t) => {
	const validator = new Validator();
	const res = await validator.validate(invalidRefsSpec);
	t.assert.equal(res.valid, false, "validation fails");
	t.assert.equal(
		res.errors,
		"Can't resolve #/components/schemas/nonExisting1",
		"correct error message",
	);
});

test("recursive refs pass validation", async (t) => {
	const validator = new Validator();
	const res = await validator.validate(recursiveRefsSpec);
	t.assert.equal(res.valid, true, "validation succeeds");
});
