import tap from "tap";
const test = tap.test;

import { createRequire } from 'module';
import Validator from '../index.js';
const validator = new Validator();
const resolve = specification => validator.resolveRefs({specification})

const importJSON = createRequire(import.meta.url);


test(`non object returns undefined`, async t => {
  const schema = "schema";
  t.plan(1);
  const res = resolve(schema);
  t.equal(res, undefined);
});

test(`Local $refs`, async t => {
  const schema = {
    "$id": "http://www.example.com/",
    "$schema": "http://json-schema.org/draft-07/schema#",

    "definitions": {
      "address": {
        "type": "object",
        "properties": {
          "street_address": { "type": "string" },
          "city": { "type": "string" },
          "state": { "type": "string" },
          "subAddress": { "$ref": "http://www.example.com/#/definitions/address" }
        }
      },
      "req": { "required": ["billing_address"] }
    },
    "type": "object",
    "properties": {
      "billing_address": { "$ref": "#/definitions/address" },
      "shipping_address": { "$ref": "#/definitions/address" },
    },
    "$ref": "#/definitions/req"
  }
  t.plan(3);
  const res = resolve(schema)
  const ptr = res.properties.billing_address.properties
  t.equal(ptr.city.type, "string", "followed $ref without neigbor properties");
  const circular = ptr.subAddress.properties
  t.equal(circular.city.type, "string", "followed circular $ref without neigbor properties");
  t.equal(res.required[0], "billing_address", "followed $ref *with* neigbor properties");
});

test(`number in path`, async t => {
  const schema = {
    "$id": "http://www.example.com/",
    "$schema": "http://json-schema.org/draft-07/schema#",

    "definitions": {
      2: { 
        "required": ["billing_address"],
       }
    },
    "$ref": "#/definitions/2"
  }
  t.plan(1);
  const res = resolve(schema)
  t.equal(res.required[0], "billing_address", "followed $ref to $anchor");
});

test(`$ref to $anchor`, async t => {
  const schema = {
    "$id": "http://www.example.com/",
    "$schema": "http://json-schema.org/draft-07/schema#",

    "definitions": {
      "req": { 
        "required": ["billing_address"],
        "$anchor": "myAnchor"
       }
    },
    "$ref": "#myAnchor"
  }
  t.plan(1);
  const res = resolve(schema)
  t.equal(res.required[0], "billing_address", "followed $ref to $anchor");
});

test(`$dynamicRef to $dynamicAnchor`, async t => {
  const schema = {
    "$id": "http://www.example.com/",
    "$schema": "http://json-schema.org/draft-07/schema#",

    "definitions": {
      "req": { 
        "required": ["billing_address"],
        "$dynamicAnchor": "myAnchor"
       }
    },
    "$dynamicRef": "#myAnchor"
  }
  t.plan(1);
  const res = resolve(schema)
  t.equal(res.required[0], "billing_address", "followed $ref to $anchor");
});

test(`non-existing path throws error`, async t => {
  const schema = {
    "$id": "http://www.example.com/",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$ref": "#/definitions/req"
  }
  t.plan(1);
  t.throws(() => resolve(schema), "Error: Can't resolve http://www.example.com/#/definitions/req", "got expected error");
});

test(`non-existing uri throws error`, async t => {
  const schema = {
    "$id": "http://www.example.com/",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "definitions": {
      "req": { "required": ["billing_address"] }
    },
    "$ref": "http://www.example.com/failed#/definitions/req"
  }
  t.plan(1);
  t.throws(() => resolve(schema), new Error("Can't resolve http://www.example.com/failed#/definitions/req"), "got expected error");
});

test(`non-existing $anchor throws error`, async t => {
  const schema = {
    "$id": "http://www.example.com/",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$ref": "#undefinedAnchor"
  }
  t.plan(1);
  t.throws(() => resolve(schema), new Error("Can't resolve http://www.example.com/#undefinedAnchor"), "got expected error");
});

test(`non-existing $dynamicAnchor throws error`, async t => {
  const schema = {
    "$id": "http://www.example.com/",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$dynamicRef": "#undefinedAnchor"
  }
  t.plan(1);
  t.throws(() => resolve(schema), new Error("Can't resolve $dynamicAnchor : '#undefinedAnchor'"), "got expected error");
});


test(`non-unique $id throws error`, async t => {
  const schema = {
    "$id": "http://www.example.com/",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "definitions": {
      "$id": "http://www.example.com/"
    }
  }
  t.plan(1);
  t.throws(() => resolve(schema), new Error("$id : 'http://www.example.com/' defined more than once at #/definitions"), "got expected error");
});

test(`non-unique $anchor throws error`, async t => {
  const schema = {
    "$id": "http://www.example.com/",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "definitions": {
      "anchor A": { "$anchor": "#myAnchor" },
      "anchor B": { "$anchor": "#myAnchor" }
    }
  }
  t.plan(1);
  t.throws(() => resolve(schema), new Error("$anchor : '#myAnchor' defined more than once at '#/definitions/anchor B'" ), "got expected error");
});

test(`non-unique $dynamicAnchor throws error`, async t => {
  const schema = {
    "$id": "http://www.example.com/",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "definitions": {
      "anchor A": { "$dynamicAnchor": "#myAnchor" },
      "anchor B": { "$dynamicAnchor": "#myAnchor" }
    }
  }
  t.plan(1);
  t.throws(() => resolve(schema), new Error("$dynamicAnchor : '#myAnchor' defined more than once at '#/definitions/anchor B'" ), "got expected error");
});
