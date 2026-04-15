#!/usr/bin/env node

import { writeFileSync } from "node:fs";
import { basename } from "node:path";
import { argv, exit } from "node:process";
import { parseArgs } from "node:util";
import { stringify } from "yaml";
import { Validator } from "../index.js";

const cmd = basename(argv[1]);
const validator = new Validator();
const validTypes = new Set(["JSON", "YAML"]);

function formatOutput(type, data) {
	if (type === "YAML") {
		return stringify(data);
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

// Define the options for parseArgs
const argvOptions = {
	options: {
		output: {
			type: "string",
			short: "o",
			default: undefined,
		},
		type: {
			type: "string",
			short: "t",
			default: "JSON",
		},
		help: {
			type: "boolean",
			short: "h",
		},
	},
	allowPositionals: true,
};

// Parse arguments
const { values, positionals } = parseArgs(argvOptions);

const type = values.type.toUpperCase();
if (!validTypes.has(type)) {
	console.log(`Unknown type: ${values.type}`);
	usage();
}

if (positionals.length === 0) {
	usage();
}

const result = await validator.validateBundle(positionals);

if (result.valid) {
	writeOutput(values.output, formatOutput(type, validator.specification));
	exit(0);
}

console.log(formatOutput(type, result));
exit(1);
