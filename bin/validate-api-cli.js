#!/usr/bin/env node

import { Validator } from "../index.js";
const validator = new Validator();
import { argv, exit } from "process";

const filename = argv[2];
if (!filename) {
  console.log(`
    usage: ${argv[1]} <file>
    where <file> contains a yaml or json openApi specification.
    `);
  exit(1);
}

validator.validate(filename).then((result) => {
  console.log(JSON.stringify(result, null, 2));
  if (!result.valid) {
    exit(1);
  }
});
