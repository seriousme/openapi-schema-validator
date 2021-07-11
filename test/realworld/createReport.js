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
        item = data[key];
        output += `
### Path: \`${item.path}\`
Path on Github: [link](${item.gitHubUrl})

Value: ${item.hasValue ? `
\`\`\`json
${item.value}
\`\`\`` : 'content too large'}

   |Keyword |Params |Message |
   |--------|-------|--------|
${item.errors.map(err => `   |${err.keyword} |${err.params}| ${err.message}`).join("\n")}
`
    }
    return output;

}


function createReport(results) {
    return `# Results of real world testing
Report generated at: ${new Date()}

Number of APIs failing validation: ${Object.values(results).length}


${Object.values(results).map(item => `
## \`${item.name} (version: ${item.apiVersion}) \`
${item.openApiVersion === "2.0" ? "Swagger" : "OpenApi"}: [${item.openApiVersion}](https://spec.openapis.org/oas/v${item.openApiVersion})

On Github: [link](${item.gitHubUrl})

Updated: ${item.updated}
${processErrors(item.result.errors)}
    ` ).join("\n")}`;
}


module.exports = { createReport };

