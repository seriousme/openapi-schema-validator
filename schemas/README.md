# The schemas
This folder contain the JSON schemas for the openApi specifications as used by this package.
The original schemas from the [openApi specification repository](https://github.com/OAI/OpenAPI-Specification) have been slightly modified to work with the current AJV version that this package uses.
This means:
- migrating schemas from JSONschema-draft-04 to JSONschema-draft-07 as AJV does not support draft-04 anymore.
- replacing $dynamicRefs by normal $refs as the current version of AJV has an issue with resolving $dynamicRefs outside the root object.

