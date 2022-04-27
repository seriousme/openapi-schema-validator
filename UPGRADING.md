# Upgrade Guide

This document describes breaking changes and how to upgrade. For a complete list
of changes including minor and patch releases, please refer to the
[changelog](CHANGELOG.md).

<a name="2.0.0"></a>

## 2.0.0

### Changes to initialization

This version is an ES6 Module and does not do a `default` anymore, it just
exports the `Validator` class

So where you previously had:

```javascript
// ESM
import { Validator } from "@seriousme/openapi-schema-validator";
// CJS
const Validator = require("@seriousme/openapi-schema-validator");
```

You now need to do:

```javascript
// ESM
import { Validator } from "@seriousme/openapi-schema-validator";
// CJS
const { Validator } = await (import("@seriousme/openapi-schema-validator"));
```
