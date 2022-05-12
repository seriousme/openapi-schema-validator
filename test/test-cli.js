import { fileURLToPath, URL } from "url";
import { test } from "tap";
import { execSync } from "child_process"


function localFile(fileName) {
    return fileURLToPath(new URL(fileName, import.meta.url));
}

test("cli does not error", (t) => {
    t.plan(1);
    const cli = localFile("../bin/validate-api-cli.js");
    const yamlFileName = localFile(`./validation/petstore-openapi.v3.yaml`);
    const result = JSON.parse(execSync(`node ${cli} ${yamlFileName}`));
    t.equal(result.valid, true, "cli validation of petstore spec works")
});


test("cli fails on empty spec", (t) => {
    t.plan(1);
    const cli = localFile("../bin/validate-api-cli.js");
    const yamlFileName = localFile(`./validation/empty.json`);
    t.throws(() => execSync(`node ${cli} ${yamlFileName}`));
});

test("cli fails on no spec", (t) => {
    t.plan(1);
    const cli = localFile("../bin/validate-api-cli.js");
    t.throws(() => execSync(`node ${cli}`));
});
