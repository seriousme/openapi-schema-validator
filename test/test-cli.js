import { test } from "tap";
import { execSync } from "child_process"


function localFile(fileName) {
    return new URL(fileName, import.meta.url).pathname;
}

test("cli does not error", async (t) => {
    t.plan(1);
    const cli = localFile("../bin/validate-api-cli.js");
    const yamlFileName = localFile(`./validation/petstore-openapi.v3.yaml`);
    const result = JSON.parse(execSync(`node ${cli} ${yamlFileName}`));
    t.equal(result.valid, true, "cli validation of petstore spec works")
})