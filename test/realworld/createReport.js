function escapeMarkDown(string){
    return string.replace(/[.*+?^~${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function minorVersion(version){
    const [major,minor, _] = version.split('.');
    return `${major}.${minor}`;
}

function processErrors(errors) {
    const data = {};
    for (const item of errors) {
        const path = item.instancePath;
        if (!data[path]) {
            data[path] = {
                path,
                gitHubUrl: item.gitHubUrl,
                hasValue: item.hasInstanceValue,
                value: JSON.stringify(item.instanceValue, null, 2),
                errors: [],
                errorIdx: {}
            };
        }
        const error = {
            keyword: item.keyword,
            params: JSON.stringify(item.params),
            message: item.message
        }
        const errorKey = JSON.stringify(error);
        if (!data[path].errorIdx[errorKey]) {
            data[path].errorIdx[errorKey] = true;
            data[path].errors.push(error);
        }
    }
    let output = "";
    for (const key in data) {
        const item = data[key];
        output += `
### Path: ${escapeMarkDown(item.path)}
Path on Github: [link](${item.gitHubUrl})

Value: ${item.hasValue ? `
\`\`\`json
${item.value}
\`\`\`` : 'content too large'}

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
${item.errors.map(err => `   |${err.keyword} |${err.params}| ${err.message}`).join("\n")}
`
    }
    return output;

}

export function createReport(results) {
    return `# Results of real world testing
Report generated at: ${new Date(Date.parse(results.testDate))}

| APIs at [apis.guru](https://apis.guru) | #
|--------|-------|
|Total |${results.totalApiCount} 
|Tested |${results.testedAPICount}
|Failed validation | ${results.failedAPICount}

${results.failedTests.map(item => `
## API: ${escapeMarkDown(item.name)} (version: ${item.apiVersion}) 
${item.openApiVersion === "2.0" ? "Swagger" : "OpenApi"}: [${item.openApiVersion}](https://spec.openapis.org/oas/v${item.openApiVersion})
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v${minorVersion(item.openApiVersion)}/schema.json)

API on Github: [link](${item.gitHubUrl})

API updated: ${item.updated}
${processErrors(item.result.errors)}
    ` ).join("\n")}`;
}


