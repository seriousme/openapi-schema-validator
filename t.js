import { fileURLToPath } from "url"

function localFile(fileName) {
    return fileURLToPath(new URL(fileName, import.meta.url));
}

console.log(localFile('t.js'))