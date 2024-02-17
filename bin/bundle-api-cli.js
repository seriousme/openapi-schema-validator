#!/usr/bin/env node

import argvParser from "minimist";
import { argv, exit } from "process";
import { dump } from "js-yaml";
import { writeFileSync } from "fs";
import { basename } from "path";
import { Validator } from "../index.js";

const cmd = basename(argv[1]);
const validator = new Validator();
const validTypes = new Set(["JSON", "YAML"]);

function formatOutput(type, data) {
	if (type === "YAML") {
		return dump(data);
	}
	return JSON.stringify(data, null, 2);
}

function writeOutput(filename, data) {
	if (filename) {
		writeFileSync(filename, data);
		return;
	}
	console.log(data);
}

function usage() {
	console.log(`
Usage: 
	${cmd} <files>  [-t <type>] [-o <output>] 

Options:
	-o  --output <filename>   the filename to save the output to, default is STDOUT.
  	-t  --type [JSON|YAML]   the output format, default is JSON.

There can only be one main specification present (starting with swagger/openapi) 
but it does not have to be the first one. If the files do not have '$id' attributes,
then the '$id' attribute will be generated from the filename.

example:
	${cmd} subSpec.yaml mainSpec.yaml -t YAML -o bundle.yaml

The output will be a validated JSON specification.
`);
	exit(1);
}

const argvOptions = {
	string: ["output", "type", "_"],
	alias: {
		output: "o",
		type: "t",
	},

	default: {
		output: false,
		type: "JSON",
	},
};

const args = argvParser(argv.slice(2), argvOptions);
const type = args.type.toUpperCase();
if (!validTypes.has(type)) {
	console.log(`Unknown type: ${args.type}`);
	usage();
}

if (args._.length === 0) {
	usage();
}

const result = await validator.validateBundle(args._);

if (result.valid) {
	writeOutput(args.output, formatOutput(type, validator.specification));
	exit(0);
}

console.log(formatOutput(type, result));
exit(1);
