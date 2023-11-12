import { createRequire } from "module";
import { createReport } from "./createReport.js";
const importJSON = createRequire(import.meta.url);
const localFile = (fileName) => new URL(fileName, import.meta.url).pathname;

import { writeFileSync } from "fs";

const mdFile = localFile("./failed.fromJson.md");
const failedFile = localFile("./failed.json");
const data = importJSON(failedFile);
writeFileSync(mdFile, createReport(data), "utf8");
