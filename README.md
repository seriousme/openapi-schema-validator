# OpenAPI schema validator
[![CI status](https://github.com/seriousme/openapi-schema-validator/workflows/Node.js%20CI/badge.svg)](https://github.com/seriousme/openapi-schema-validator/actions?query=workflow%3A%22Node.js+CI%22)
[![Coverage Status](https://coveralls.io/repos/github/seriousme/openapi-schema-validator/badge.svg?branch=master)](https://coveralls.io/github/seriousme/openapi-schema-validator?branch=master)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/seriousme/openapi-schema-validator.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/seriousme/openapi-schema-validator/context:javascript)
[![NPM version](https://img.shields.io/npm/v/@seriousme/openapi-schema-validator.svg)](https://www.npmjs.com/package/seriousme/openapi-schema-validator)
![npm](https://img.shields.io/npm/dm/@seriousme/openapi-schema-validator)



A JSON schema validator for [OpenAPI](https://www.openapis.org/) specifications, it currently supports:
- [2.0](https://spec.openapis.org/oas/v2.0)
- [3.0.x](https://spec.openapis.org/oas/v3.0.3)
- [3.1.x](https://spec.openapis.org/oas/v3.1.0)

<a name="install"></a>
## Install 
```
npm i @seriousme/openapi-schema-validator --save
```

<a name="Usage"></a>
### Usage

```javascript
import Validator from "openapi-schema-validator";

console.log(Validator.supportedVersions.has("3.1"))
// prints true

const validator = new Validator();
const res = await validator.validate('./petstore.json');
if (res.valid){
  console.log("Specification matches schema for version", validator.version);
  const schema = validator.resolveRefs());
  // schema now contains a Javascript object containing the dereferenced schema
} else {
  console.log("Specification does not match Schema");
  console.log(res.errors);
}

```

<a name="Usage"></a>
### API
- [`<instance>.validate(specification)`](#validate)
- [`<instance>.version`](#version)
- [`<instance>.resolveRefs(options)`](#resolveRefs)
- [`Validator.supportedVersions`](#supportedVersions)

<a name="validate"></a>
```
<instance>.validate(specification)
```

This function tries to validata a specification against the OpenApi schemas. `specification` can be one of:

- a JSON object
- a JSON object encoded as string
- a YAML string
- a filename

External references are *not* automatically resolved so you need to inline them yourself if required.
The result is an object:
```
{
  valid: <boolean>,
  errors: <any>  // only present if valid is false
}
```

<a name="version"></a>
```
<instance>.version
```

If validation is succesfull this will return the openApi version found e.g. ("2.0","3.0","3.1).
The openApi specification only specifies major/minor versions as separate schemas. So "3.0.3" results in "3.0".

<a name="resolveRefs"></a>
```
<instance>.resolveRefs(options)
```

This function tries to resolve all internal references. External references are *not* automatically resolved so you need to inline them yourself if required. By default it will use the last specification passed to `<instance>.validate()`
but you can explicity pass a specification by passing `{specification:<object>}` as options.
The result is an `object` where all references have been resolved.
Resolution of references is `shallow` This should normally not be a problem for this use case.

<a name="supportedVersions"></a>
```
Validator.supportedVersions
```

This static property returns the OpenApi versions supported by this package as a `Set`. If present, the result of `<instance>.version` is a member of this `Set`.

<a name="license"></a>
# License
Licensed under the [MIT license](LICENSE.txt)
