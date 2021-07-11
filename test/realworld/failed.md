# Results of real world testing
Report generated at: Sun Jul 11 2021 19:49:13 GMT+0200 (Central European Summer Time)

Number of APIs failing validation: 14



## `airport-web.appspot.com (version: v1) `
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)

On Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/airport-web.appspot.com/v1/swagger.yaml)

Updated: 2021-06-21T12:16:53.715Z

### Path: `/securityDefinitions/google_id_token`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/airport-web.appspot.com/v1/swagger.yaml#L24)

Value: 
```json
{
  "authorizationUrl": "",
  "flow": "implicit",
  "type": "oauth2",
  "x-google-issuer": "accounts.google.com",
  "x-google-jwks_uri": "https://www.googleapis.com/oauth2/v1/certs"
}
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"authorizationUrl"}| must NOT have additional properties
   |required |{"missingProperty":"name"}| must have required property 'name'
   |required |{"missingProperty":"tokenUrl"}| must have required property 'tokenUrl'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

### Path: `/securityDefinitions/google_id_token/authorizationUrl`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/airport-web.appspot.com/v1/swagger.yaml#L25)

Value: 
```json
""
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri"}| must match format "uri"

    

## `ato.gov.au (version: 0.0.6) `
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)

On Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/ato.gov.au/0.0.6/swagger.yaml)

Updated: 2017-09-06T11:44:38.000Z

### Path: `/paths/~1individuals~1{partyId}/delete/responses/400`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/ato.gov.au/0.0.6/swagger.yaml#L902)

Value: 
```json
{
  "$ref": "#/responses/FailedPrecondition",
  "description": "Individual has related resources and cannot be deleted"
}
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"$ref"}| must NOT have additional properties
   |additionalProperties |{"additionalProperty":"description"}| must NOT have additional properties
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

    

## `azure.com:servicebus (version: 2017-04-01) `
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)

On Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/servicebus/2017-04-01/swagger.yaml)

Updated: 2019-09-23T09:26:07.000Z

### Path: `/paths/~1subscriptions~1{subscriptionId}~1resourceGroups~1{resourceGroupName}~1providers~1Microsoft.ServiceBus~1namespaces~1{namespaceName}~1topics~1{topicName}~1subscriptions~1{subscriptionName}~1rules~1{ruleName}/get/externalDocs/url`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/servicebus/2017-04-01/swagger.yaml#L4207)

Value: 
```json
""
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri"}| must match format "uri"

    

## `azure.com:storageimportexport (version: 2016-11-01) `
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)

On Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/storageimportexport/2016-11-01/swagger.yaml)

Updated: 2019-07-22T11:03:07.000Z

### Path: `/paths/~1providers~1Microsoft.ImportExport~1locations/get/externalDocs/url`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/storageimportexport/2016-11-01/swagger.yaml#L79)

Value: 
```json
""
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri"}| must match format "uri"

    

## `digitalocean.com (version: 2.0) `
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)

On Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/digitalocean.com/2.0/openapi.yaml)

Updated: 2021-07-05T15:07:17.927Z

### Path: `/paths/~1v2~1account~1keys~1{ssh_key_identifier}/delete/parameters/0`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/digitalocean.com/2.0/openapi.yaml#L1189)

Value: 
```json
{
  "$ref": "#/paths/~1v2~1account~1keys~1{ssh_key_identifier}/get/parameters/0"
}
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |required |{"missingProperty":"schema"}| must have required property 'schema'
   |required |{"missingProperty":"content"}| must have required property 'content'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

### Path: `/paths/~1v2~1account~1keys~1{ssh_key_identifier}/delete/parameters/0/$ref`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/digitalocean.com/2.0/openapi.yaml#L1195)

Value: 
```json
"#/paths/~1v2~1account~1keys~1{ssh_key_identifier}/get/parameters/0"
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri-reference"}| must match format "uri-reference"

    

## `googleapis.com:datacatalog (version: v1beta1) `
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)

On Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/datacatalog/v1beta1/openapi.yaml)

Updated: 2021-07-05T23:08:37.856Z

### Path: ``
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/datacatalog/v1beta1/openapi.yaml#L1)

Value: content too large

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## `openapi-generator.tech (version: 5.1.1) `
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)

On Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/openapi-generator.tech/5.1.1/swagger.yaml)

Updated: 2021-06-21T12:16:53.715Z

### Path: `/paths/~1api~1gen~1clients~1{language}/get/responses/200/schema/additionalProperties`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/openapi-generator.tech/5.1.1/swagger.yaml#L61)

Value: 
```json
{
  "$ref": "#/definitions/CliOption",
  "originalRef": "CliOption"
}
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"originalRef"}| must NOT have additional properties
   |type |{"type":"boolean"}| must be boolean
   |anyOf |{}| must match a schema in anyOf

### Path: `/paths/~1api~1gen~1clients~1{language}/get/responses/200/schema`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/openapi-generator.tech/5.1.1/swagger.yaml#L60)

Value: 
```json
{
  "additionalProperties": {
    "$ref": "#/definitions/CliOption",
    "originalRef": "CliOption"
  },
  "type": "object"
}
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"additionalProperties"}| must NOT have additional properties
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

### Path: `/paths/~1api~1gen~1clients~1{language}/get/responses/200`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/openapi-generator.tech/5.1.1/swagger.yaml#L58)

Value: 
```json
{
  "description": "successful operation",
  "schema": {
    "additionalProperties": {
      "$ref": "#/definitions/CliOption",
      "originalRef": "CliOption"
    },
    "type": "object"
  }
}
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |required |{"missingProperty":"$ref"}| must have required property '$ref'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

    

## `opensuse.org:obs (version: 2.10.50) `
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)

On Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/opensuse.org/obs/2.10.50/openapi.yaml)

Updated: 2021-07-11T13:49:21.785Z

### Path: `/paths/~1published~1{project_name}~1{repository_name}~1{architecture_name}~1{binary_filename}?view=ymp/get/responses/200/content/application~1xml; charset=utf-8/schema/properties/xmlns/xml`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/opensuse.org/obs/2.10.50/openapi.yaml#L4020)

Value: 
```json
{
  "attribute": true,
  "example": "http://opensuse.org/Standards/One_Click_Install"
}
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"example"}| must NOT have additional properties

### Path: `/paths/~1published~1{project_name}~1{repository_name}~1{architecture_name}~1{binary_filename}?view=ymp/get/responses/200/content/application~1xml; charset=utf-8/schema/properties/xmlns`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/opensuse.org/obs/2.10.50/openapi.yaml#L4018)

Value: 
```json
{
  "type": "string",
  "xml": {
    "attribute": true,
    "example": "http://opensuse.org/Standards/One_Click_Install"
  }
}
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |required |{"missingProperty":"$ref"}| must have required property '$ref'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

### Path: `/paths/~1published~1{project_name}~1{repository_name}~1{architecture_name}~1{binary_filename}?view=ymp/get/responses/200/content/application~1xml; charset=utf-8/schema`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/opensuse.org/obs/2.10.50/openapi.yaml#L3977)

Value: 
```json
{
  "properties": {
    "group": {
      "properties": {
        "distversion": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "repositories": {
          "properties": {
            "repository": {
              "items": {
                "properties": {
                  "description": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  },
                  "recommended": {
                    "type": "string",
                    "xml": {
                      "attribute": true
                    }
                  },
                  "summary": {
                    "type": "string"
                  },
                  "url": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "type": "array"
            }
          },
          "type": "object"
        },
        "software": {
          "properties": {
            "item": {
              "properties": {
                "description": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "summary": {
                  "type": "string"
                }
              },
              "type": "object"
            }
          },
          "type": "object"
        }
      },
      "type": "object"
    },
    "xmlns": {
      "type": "string",
      "xml": {
        "attribute": true,
        "example": "http://opensuse.org/Standards/One_Click_Install"
      }
    },
    "xmlns:os": {
      "type": "string",
      "xml": {
        "attribute": true,
        "example": "http://opensuse.org/Standards/One_Click_Install"
      }
    }
  },
  "type": "object",
  "xml": {
    "name": "metapackage"
  }
}
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |required |{"missingProperty":"$ref"}| must have required property '$ref'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

### Path: `/paths/~1published~1{project_name}~1{repository_name}~1{architecture_name}~1{binary_filename}?view=ymp/get/responses/200`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/opensuse.org/obs/2.10.50/openapi.yaml#L3952)

Value: 
```json
{
  "content": {
    "application/xml; charset=utf-8": {
      "example": {
        "group": {
          "distversion": "openSUSEsLeap 15.2",
          "repositories": {
            "repository": [
              {
                "description": "These are the developer versions of the tools for the Open Build Service project",
                "name": "OBS:Server:Unstable",
                "recommended": true,
                "summary": "Developer versions of the Open Build Service Server",
                "url": "https://download.opensuse.org/repositories/OBS:/Server:/Unstable/openSUSE_15.2"
              },
              {
                "description": "openSUSE Leap borrows packages from SLE for the base system",
                "name": "openSUSE:Leap:15.2",
                "recommended": false,
                "summary": "openSUSE Leap 15.2",
                "url": "http://download.opensuse.org/distribution/leap/15.2/repo/oss"
              }
            ]
          },
          "software": {
            "item": {
              "description": "This package provides debug information for package virt-v2v",
              "name": "virt-v2v-debuginfo",
              "summary": "Debug information for package virt-v2v"
            }
          }
        },
        "xmlns": "http://opensuse.org/Standards/One_Click_Install",
        "xmlns:os": "http://opensuse.org/Standards/One_Click_Install"
      },
      "schema": {
        "properties": {
          "group": {
            "properties": {
              "distversion": {
                "type": "string",
                "xml": {
                  "attribute": true
                }
              },
              "repositories": {
                "properties": {
                  "repository": {
                    "items": {
                      "properties": {
                        "description": {
                          "type": "string"
                        },
                        "name": {
                          "type": "string"
                        },
                        "recommended": {
                          "type": "string",
                          "xml": {
                            "attribute": true
                          }
                        },
                        "summary": {
                          "type": "string"
                        },
                        "url": {
                          "type": "string"
                        }
                      },
                      "type": "object"
                    },
                    "type": "array"
                  }
                },
                "type": "object"
              },
              "software": {
                "properties": {
                  "item": {
                    "properties": {
                      "description": {
                        "type": "string"
                      },
                      "name": {
                        "type": "string"
                      },
                      "summary": {
                        "type": "string"
                      }
                    },
                    "type": "object"
                  }
                },
                "type": "object"
              }
            },
            "type": "object"
          },
          "xmlns": {
            "type": "string",
            "xml": {
              "attribute": true,
              "example": "http://opensuse.org/Standards/One_Click_Install"
            }
          },
          "xmlns:os": {
            "type": "string",
            "xml": {
              "attribute": true,
              "example": "http://opensuse.org/Standards/One_Click_Install"
            }
          }
        },
        "type": "object",
        "xml": {
          "name": "metapackage"
        }
      }
    }
  },
  "description": "OK."
}
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |required |{"missingProperty":"$ref"}| must have required property '$ref'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

    

## `parliament.uk:statutoryinstruments (version: v1) `
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)

On Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/parliament.uk/statutoryinstruments/v1/swagger.yaml)

Updated: 2021-06-21T12:16:53.715Z

### Path: `/info/contact/url`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/parliament.uk/statutoryinstruments/v1/swagger.yaml#L6)

Value: 
```json
""
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri"}| must match format "uri"

    

## `parliament.uk:treaties (version: v1) `
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)

On Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/parliament.uk/treaties/v1/swagger.yaml)

Updated: 2021-05-24T10:27:51.952Z

### Path: `/info/contact/url`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/parliament.uk/treaties/v1/swagger.yaml#L6)

Value: 
```json
""
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri"}| must match format "uri"

    

## `prss.org (version: 2.0.0) `
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)

On Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/prss.org/2.0.0/swagger.yaml)

Updated: 2021-06-21T12:16:53.715Z

### Path: `/paths/~1api~1v2~1metapub~1program-information~1batch/post/responses/202/schema/externalDocs/url`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/prss.org/2.0.0/swagger.yaml#L417)

Value: 
```json
"/api/epg-cd-mapping.html"
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri"}| must match format "uri"

### Path: `/paths/~1api~1v2~1metapub~1program-information~1batch/post/responses/202/schema`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/prss.org/2.0.0/swagger.yaml#L413)

Value: 
```json
{
  "$ref": "#/definitions/ProgramInformationBatch",
  "externalDocs": {
    "description": "Find RadioDns to ContentDepot Mapping here",
    "url": "/api/epg-cd-mapping.html"
  }
}
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |required |{"missingProperty":"type"}| must have required property 'type'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

### Path: `/paths/~1api~1v2~1metapub~1program-information~1batch/post/responses/202`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/prss.org/2.0.0/swagger.yaml#L411)

Value: 
```json
{
  "description": "The accepted batch information that is queued for processing.",
  "schema": {
    "$ref": "#/definitions/ProgramInformationBatch",
    "externalDocs": {
      "description": "Find RadioDns to ContentDepot Mapping here",
      "url": "/api/epg-cd-mapping.html"
    }
  }
}
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |required |{"missingProperty":"$ref"}| must have required property '$ref'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

    

## `trashnothing.com (version: 1.2) `
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)

On Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/trashnothing.com/1.2/openapi.yaml)

Updated: 2021-06-21T12:16:53.715Z

### Path: `/info/termsOfService`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/trashnothing.com/1.2/openapi.yaml#L15)

Value: 
```json
"https://trashnothing.com/tos\n"
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri-reference"}| must match format "uri-reference"

    

## `twinehealth.com (version: v7.78.1) `
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)

On Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/twinehealth.com/v7.78.1/swagger.yaml)

Updated: 2021-06-21T12:16:53.715Z

### Path: `/securityDefinitions/OAuth2`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/twinehealth.com/v7.78.1/swagger.yaml#L77)

Value: 
```json
{
  "description": "Fitbit Plus allows customers to access data for their organization using client credentials.\nOAuth2 is a safe and secure way to give you access.\n",
  "flow": "application",
  "scopes": {
    "group": "access patients and data within a group",
    "organization": "access patients and data within an organization"
  },
  "tokenUrl": "/oauth/token",
  "type": "oauth2"
}
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"flow"}| must NOT have additional properties
   |required |{"missingProperty":"name"}| must have required property 'name'
   |required |{"missingProperty":"authorizationUrl"}| must have required property 'authorizationUrl'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

### Path: `/securityDefinitions/OAuth2/flow`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/twinehealth.com/v7.78.1/swagger.yaml#L81)

Value: 
```json
"application"
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |enum |{"allowedValues":["password"]}| must be equal to one of the allowed values

### Path: `/securityDefinitions/OAuth2/tokenUrl`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/twinehealth.com/v7.78.1/swagger.yaml#L85)

Value: 
```json
"/oauth/token"
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri"}| must match format "uri"

    

## `whapi.com:numbers (version: 2.0) `
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)

On Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/whapi.com/numbers/2.0/swagger.yaml)

Updated: 2021-06-21T12:16:53.715Z

### Path: `/info/license/url`
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/whapi.com/numbers/2.0/swagger.yaml#L12)

Value: 
```json
"www.williamhill.com"
```

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri"}| must match format "uri"

    