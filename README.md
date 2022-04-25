# OpenAPI schema validator

[![CI status](https://github.com/seriousme/openapi-schema-validator/workflows/Node.js%20CI/badge.svg)](https://github.com/seriousme/openapi-schema-validator/actions?query=workflow%3A%22Node.js+CI%22)
[![Coverage Status](https://coveralls.io/repos/github/seriousme/openapi-schema-validator/badge.svg?branch=master)](https://coveralls.io/github/seriousme/openapi-schema-validator?branch=master)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/seriousme/openapi-schema-validator.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/seriousme/openapi-schema-validator/context:javascript)
[![NPM version](https://img.shields.io/npm/v/@seriousme/openapi-schema-validator.svg)](https://www.npmjs.com/package/seriousme/openapi-schema-validator)
![npm](https://img.shields.io/npm/dm/@seriousme/openapi-schema-validator)
[![Tested on APIs.guru](https://api.apis.guru/badges/tested_on.svg)](https://apis.guru/browse-apis/)

A JSON schema validator for [OpenAPI](https://www.openapis.org/) specifications,
it currently supports:

- [2.0](https://spec.openapis.org/oas/v2.0)
- [3.0.x](https://spec.openapis.org/oas/v3.0.3)
- [3.1.x](https://spec.openapis.org/oas/v3.1.0)

Tested on [over 2,000 real-world APIs](https://apis.guru/browse-apis/) from AWS,
Microsoft, Google etc.

<a name="install"></a>

## Install

```bash
npm install @seriousme/openapi-schema-validator
```

<a name="Usage"></a>

## Usage

This module is ESM only, if you need to use commonJS please see below.

```javascript
// ESM
import { Validator } from "@seriousme/openapi-schema-validator";

console.log(Validator.supportedVersions.has("3.1"));
// prints true

const validator = new Validator();
const res = await validator.validate("./petstore.json");
const specification = validator.specification;
// specification now contains a Javascript object containing the specification
if (res.valid) {
  console.log("Specification matches schema for version", validator.version);
  const schema = validator.resolveRefs();
  // schema now contains a Javascript object containing the dereferenced schema
} else {
  console.log("Specification does not match Schema");
  console.log(res.errors);
}
```

This module can be used in CommonJS code via:

```javascript
// CommonJS
const { Validator } = await (import("@seriousme/openapi-schema-validator"));
```

See also the [upgrading guide](UPGRADING.md) if you come from a previous major version.

<a name="CLI"></a>

### CLI

Run with global install:

```bash
npm install @seriousme/openapi-schema-validator -g
validate-api <filename>
```

Run without install:

```bash
npx -p @seriousme/openapi-schema-validator validate-api <filename>
```

Where `<filename>` refers to a YAML or JSON file containing the specification.

<a name="API"></a>

## API

- [`new Validator(ajvOptions)`](#newValidator)
- [`<instance>.validate(specification)`](#validate)
- [`<instance>.specification`](#specification)
- [`<instance>.version`](#version)
- [`<instance>.resolveRefs(options)`](#resolveRefs)
- [`<instance>.addSpecRef(uri, subSpecification)`](#addSpecRef)
- [`Validator.supportedVersions`](#supportedVersions)

<a name="newValidator"></a>

### `new Validator(ajvOptions)`

The constructor returns an instance of `Validator`. By passing an ajv options
object it is possible to influence the behavior of the
[AJV schema validator](https://ajv.js.org/). AJV fails to process the openApi
schemas if you set `strict:true` therefore this set to `false` if present. This
is not a bug but a result of the complexity of the openApi JSON schemas.

<a name="validate"></a>

### `<instance>.validate(specification)`

This function tries to validata a specification against the OpenApi schemas.
`specification` can be one of:

- a JSON object
- a JSON object encoded as string
- a YAML string
- a filename

External references are _not_ automatically resolved so you need to inline them
yourself if required e.g by using `<instance>.addSpecRef()` The result is an
object:

```
{
  valid: <boolean>,
  errors: <any>  // only present if valid is false
}
```

<a name="specification"></a>

### `<instance>.specification`

If the validator managed to extract data from the specification parameter then
the extracted specification is available in this property as javascript object.
E.g. if you supplied a filename of a YAML file and the file was sucessfully read
and its YAML decoded then the contents is here. Even if validation failed.

<a name="version"></a>

### `<instance>.version`

If validation is succesfull this will return the openApi version found e.g.
("2.0","3.0","3.1). The openApi specification only specifies major/minor
versions as separate schemas. So "3.0.3" results in "3.0".

<a name="resolveRefs"></a>

### `<instance>.resolveRefs(options)`

This function tries to resolve all internal references. External references are
_not_ automatically resolved so you need to inline them yourself if required e.g
by using `<instance>.addSpecRef()`. By default it will use the last
specification passed to `<instance>.validate()` but you can explicity pass a
specification by passing `{specification:<object>}` as options. The result is an
`object` where all references have been resolved. Resolution of references is
`shallow` This should normally not be a problem for this use case.

<a name="addSpecRef"></a>

### `<instance>.addSpecRef(subSpecification, uri)`

`subSpecification` can be one of:

- a JSON object
- a JSON object encoded as string
- a YAML string
- a filename `uri` must be a string (e.g. `http://www.example.com/subspec`), but
  is not required if the subSpecification holds a `$id` attribute at top level.
  If you specify a value for `uri` it will overwrite the definition in the `$id`
  attribute at top level.

Sometimes a specification is composed of multiple files that each contain parts
of the specification. The specification refers to these sub specifications using
`external references`. Since references are based on URI's (so Identifier and
Location as in URL's!) there needs to be a way to tell the validator how to
resolve those references. This is where this function comes in:

E.g.: we have a main specification in `main-spec.yaml` containing:

```yaml
...
paths:
  /pet:
    post:
      tags:
        - pet
      summary: Add a new pet to the store
      description: ''
      operationId: addPet
      responses:
        '405':
          description: Invalid input
      requestBody:
        $ref: 'http://www.example.com/subspec#/components/requestBodies/Pet'
```

And the reference is in `sub-spec.yaml`, containing:

```yaml
components:
  requestBodies:
    Pet:
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Pet'
        application/xml:
          schema:
            $ref: '#/components/schemas/Pet'
      description: Pet object that needs to be added to the store
      required: true
  ...
```

Then the validation can be performed as follows:

```javascript
const validator = new Validator();
await validator.addSpecRef("./sub-spec.yaml", "http://www.example.com/subspec");
const res = await validator.validate("./main-spec.yaml");
// res now contains the results of the validation across main-spec and sub-spec
const specification = validator.specification;
// specification now contains a Javascript object containing the specification
// with the subspec inlined
```

<a name="supportedVersions"></a>

### `Validator.supportedVersions`

This static property returns the OpenApi versions supported by this package as a
`Set`. If present, the result of `<instance>.version` is a member of this `Set`.

<a name="license"></a>

# License

Licensed under the [MIT license](LICENSE.txt)
