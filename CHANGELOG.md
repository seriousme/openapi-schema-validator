# Changelog

## [Unreleased]
### Changed

## [v2.1.0] 14-10-2022
### Changed 
 - Update OAS v3.1 to the updated 2022-10-07 schema

## [v2.0.3] 28-09-2022
### Changed 
 - Fix ref handing in resolveRefs
 - Updated dependencies
   - c8          ^7.11.2  →  ^7.12.0     
   - node-fetch   ^3.2.3  →  ^3.2.10     
   - tap         ^16.0.1  →  ^16.3.0    

## [v2.0.2] 12-05-2022
### Changed 
 - Fix file handling on Windows

## [v2.0.1] 26-04-2022
### Changed 
 - Fix CLI issue and doc issue (@tbcarver)

## [v2.0.0] 25-04-2022
### Changed 
 - Removed Node 10/12 support from code
 - Migrated to ESM, see UPGRADING.md for details

## [v1.7.1] 22-04-2022
### Changed 
 - Updated dependencies
   - ajv          ^8.6.3  →  ^8.11.0     
   - node-fetch   ^3.0.0  →   ^3.2.3     
   - tap         ^16.0.0  →  ^16.0.1     

## [v1.7.0] 11-03-2022
### Changed 
 - Updated OAS v3.0 to the updated 2021-09-28 schema (only descriptions changed)
 - Updated OAS v3.1 to 2022-02-27 schema

## [v1.6.1] 22-2-2022
### Changed 
 - Fixed error in addSpecRef example in the README

## [v1.6.0] 09-10-2021
### Changed 
 - New feature, now supports external refs, see addSpecRef in the README.

## [v1.5.1] 08-10-2021
### Changed 
 - Fixed error message on URI ref without a path 
 
## [v1.5.0] 08-10-2021
### Changed 
 - Updated OAS v3.0 to 2021-09-28 schema
 - Updated OAS v3.1 to 2021-09-28 schema

## [v1.4.0] 25-09-2021
### Changed 
 - Updated OAS v3.1 schema because of spec update
   (https://github.com/OAI/OpenAPI-Specification/issues/2706)
 - Added URI decoding to refs
 - Updated dependencies
   - node-fetch   ^2.6.1  →  ^3.0.0     
   - ajv          ^8.6.1  →  ^8.6.3    
   - ajv-formats  ^2.1.0  →  ^2.1.1     
   - tap         ^15.0.9  →  ^15.0.10     

## [v1.3.0] 07-07-2021
### Changed
 - Added validation of formats
 - Updated dependencies
    -  ajv  ^8.6.0  →  ^8.6.1   

## [v1.2.0] 27-06-2021
### Changed
 - Cache AJV validators so that multiple validation calls are faster
 - Added CLI tool

## [v1.1.6] 26-06-2021
### Changed
 - Switched to original draft-04 schemas instead of converted draft-07 schemas now that AJV supports draft-04

## [v1.1.5] 25-06-2021
### Changed
 - fixed YAML parsing of date strings (e.g: `version: 2021-06-25`)
 - Updated dependencies
    -  ajv  ^8.3.0  →  ^8.6.0   

## [v1.1.4] 18-06-2021
### Changed
 - force AJV options strict:false and validateFormats:false even if user supplies empty ajvOptions 

## [v1.1.3] 28-05-2021
### Changed
- Support schema 3.1 2021-05-20

## [v1.1.2] 14-05-2021
### Changed
 - Added Node 10 support

## [v1.1.1] 14-05-2021
### Changed
 - Added CommonJS example to README.md

## [v1.1.0] 14-05-2021
### Changed
 - Converted from ESM to CommonJS to improve compatibility

## [v1.0.3] 10-05-2021
### Changed
- Fixed bug in v2.0 schema that disallowed multiple parameters

## [v1.0.2] 10-05-2021
### Changed
- Updated example in README.md

## [v1.0.1] 09-05-2021
### Changed
- Updated dependencies
- Reworked README
- Applied LGTM suggestions

## [v1.0.0] 09-05-2021
Initial version
