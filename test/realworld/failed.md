# Results of real world testing
Report generated at: Tue Mar 21 2023 18:54:53 GMT+0100 (Central European Standard Time)

| APIs at [apis.guru](https://apis.guru) | #
|--------|-------|
|Total |2508 
|Tested |8
|Failed validation | 8


## API: airport-web\.appspot\.com (version: v1) 
swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/airport-web.appspot.com/v1/swagger.yaml)

API updated: 2021-06-21T12:16:53.715Z

### Path: /securityDefinitions/google_id_token
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

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"authorizationUrl"}| must NOT have additional properties
   |required |{"missingProperty":"name"}| must have required property 'name'
   |required |{"missingProperty":"tokenUrl"}| must have required property 'tokenUrl'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

### Path: /securityDefinitions/google_id_token/authorizationUrl
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/airport-web.appspot.com/v1/swagger.yaml#L25)

Value: 
```json
""
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri"}| must match format "uri"

    

## API: azure\.com:servicebus (version: 2017-04-01) 
swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/servicebus/2017-04-01/swagger.yaml)

API updated: 2019-09-23T09:26:07.000Z

### Path: /paths/\~1subscriptions\~1\{subscriptionId\}\~1resourceGroups\~1\{resourceGroupName\}\~1providers\~1Microsoft\.ServiceBus\~1namespaces\~1\{namespaceName\}\~1topics\~1\{topicName\}\~1subscriptions\~1\{subscriptionName\}\~1rules\~1\{ruleName\}/get/externalDocs/url
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/servicebus/2017-04-01/swagger.yaml#L4207)

Value: 
```json
""
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri"}| must match format "uri"

    

## API: azure\.com:storageimportexport (version: 2016-11-01) 
swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/storageimportexport/2016-11-01/swagger.yaml)

API updated: 2019-07-22T11:03:07.000Z

### Path: /paths/\~1providers\~1Microsoft\.ImportExport\~1locations/get/externalDocs/url
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/storageimportexport/2016-11-01/swagger.yaml#L79)

Value: 
```json
""
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri"}| must match format "uri"

    

## API: discourse\.local (version: latest) 
openapi: [3.1.0](https://spec.openapis.org/oas/v3.1.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.1/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/discourse.local/latest/openapi.yaml)

API updated: 2023-03-06T07:12:59.965Z

### Path: /servers/1/url
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/discourse.local/latest/openapi.yaml#L68)

Value: 
```json
"https://{defaultHost}"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri-reference"}| must match format "uri-reference"

    

## API: gambitcomm\.local:mimic (version: 21.00) 
openapi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/gambitcomm.local/mimic/21.00/openapi.yaml)

API updated: 2021-07-27T15:26:52.216Z

### Path: /paths/\~1mimic\~1agent\~1\{agentNum\}\~1get\~1delay/get/responses/200/links/address/operationRef
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/gambitcomm.local/mimic/21.00/openapi.yaml#L480)

Value: 
```json
"#/mimic/agent/{agentNum}/get/start"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri-reference"}| must match format "uri-reference"

### Path: /paths/\~1mimic\~1agent\~1\{agentNum\}\~1get\~1delay/get/responses/200/links/address
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/gambitcomm.local/mimic/21.00/openapi.yaml#L479)

Value: 
```json
{
  "operationRef": "#/mimic/agent/{agentNum}/get/start",
  "parameters": {
    "agentNum": "$request.body#/agentNum"
  }
}
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |required |{"missingProperty":"$ref"}| must have required property '$ref'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

### Path: /paths/\~1mimic\~1agent\~1\{agentNum\}\~1get\~1delay/get/responses/200
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/gambitcomm.local/mimic/21.00/openapi.yaml#L471)

Value: 
```json
{
  "content": {
    "application/json": {
      "schema": {
        "format": "int32",
        "type": "integer"
      }
    }
  },
  "description": "successful operation",
  "links": {
    "address": {
      "operationRef": "#/mimic/agent/{agentNum}/get/start",
      "parameters": {
        "agentNum": "$request.body#/agentNum"
      }
    }
  }
}
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |required |{"missingProperty":"$ref"}| must have required property '$ref'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

    

## API: linode\.com (version: 4.145.0) 
openapi: [3.0.1](https://spec.openapis.org/oas/v3.0.1)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/linode.com/4.145.0/openapi.yaml)

API updated: 2023-03-06T09:58:04.581Z

### Path: /paths/\~1domains\~1\{domainId\}\~1clone/post/requestBody/content/application\~1json/schema/properties/domain/pattern
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/linode.com/4.145.0/openapi.yaml#L5848)

Value: 
```json
"\\A(\\*\\.)?([a-zA-Z0-9-_]{1,63}\\.)+([a-zA-Z]{2,3}\\.)?([a-zA-Z]{2,16}|xn--[a-zA-Z0-9]+)\\Z"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"regex"}| must match format "regex"

### Path: /paths/\~1domains\~1\{domainId\}\~1clone/post/requestBody/content/application\~1json/schema/properties/domain
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/linode.com/4.145.0/openapi.yaml#L5842)

Value: 
```json
{
  "description": "The new domain for the clone. Domain labels cannot be longer than 63 characters and must conform to [RFC1035](https://tools.ietf.org/html/rfc1035). Domains must be unique on Linode's platform, including across different Linode accounts; there cannot be two Domains representing the same domain.\n",
  "example": "example.org",
  "maxLength": 253,
  "minLength": 1,
  "pattern": "\\A(\\*\\.)?([a-zA-Z0-9-_]{1,63}\\.)+([a-zA-Z]{2,3}\\.)?([a-zA-Z]{2,16}|xn--[a-zA-Z0-9]+)\\Z",
  "type": "string",
  "x-linode-filterable": true
}
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |required |{"missingProperty":"$ref"}| must have required property '$ref'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

### Path: /paths/\~1domains\~1\{domainId\}\~1clone/post/requestBody/content/application\~1json/schema
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/linode.com/4.145.0/openapi.yaml#L5840)

Value: 
```json
{
  "properties": {
    "domain": {
      "description": "The new domain for the clone. Domain labels cannot be longer than 63 characters and must conform to [RFC1035](https://tools.ietf.org/html/rfc1035). Domains must be unique on Linode's platform, including across different Linode accounts; there cannot be two Domains representing the same domain.\n",
      "example": "example.org",
      "maxLength": 253,
      "minLength": 1,
      "pattern": "\\A(\\*\\.)?([a-zA-Z0-9-_]{1,63}\\.)+([a-zA-Z]{2,3}\\.)?([a-zA-Z]{2,16}|xn--[a-zA-Z0-9]+)\\Z",
      "type": "string",
      "x-linode-filterable": true
    }
  },
  "required": [
    "domain"
  ],
  "type": "object"
}
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |required |{"missingProperty":"$ref"}| must have required property '$ref'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

### Path: /paths/\~1domains\~1\{domainId\}\~1clone/post/requestBody
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/linode.com/4.145.0/openapi.yaml#L5837)

Value: 
```json
{
  "content": {
    "application/json": {
      "schema": {
        "properties": {
          "domain": {
            "description": "The new domain for the clone. Domain labels cannot be longer than 63 characters and must conform to [RFC1035](https://tools.ietf.org/html/rfc1035). Domains must be unique on Linode's platform, including across different Linode accounts; there cannot be two Domains representing the same domain.\n",
            "example": "example.org",
            "maxLength": 253,
            "minLength": 1,
            "pattern": "\\A(\\*\\.)?([a-zA-Z0-9-_]{1,63}\\.)+([a-zA-Z]{2,3}\\.)?([a-zA-Z]{2,16}|xn--[a-zA-Z0-9]+)\\Z",
            "type": "string",
            "x-linode-filterable": true
          }
        },
        "required": [
          "domain"
        ],
        "type": "object"
      }
    }
  },
  "description": "Information about the Domain to clone.",
  "required": true
}
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |required |{"missingProperty":"$ref"}| must have required property '$ref'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

    

## API: opensuse\.org:obs (version: 2.10.50) 
openapi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/opensuse.org/obs/2.10.50/openapi.yaml)

API updated: 2021-08-02T08:20:08.766Z

### Path: /paths/\~1published\~1\{project_name\}\~1\{repository_name\}\~1\{architecture_name\}\~1\{binary_filename\}\?view=ymp/get/responses/200/content/application\~1xml; charset=utf-8/schema/properties/xmlns/xml
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/opensuse.org/obs/2.10.50/openapi.yaml#L4023)

Value: 
```json
{
  "attribute": true,
  "example": "http://opensuse.org/Standards/One_Click_Install"
}
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"example"}| must NOT have additional properties

### Path: /paths/\~1published\~1\{project_name\}\~1\{repository_name\}\~1\{architecture_name\}\~1\{binary_filename\}\?view=ymp/get/responses/200/content/application\~1xml; charset=utf-8/schema/properties/xmlns
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/opensuse.org/obs/2.10.50/openapi.yaml#L4021)

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

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |required |{"missingProperty":"$ref"}| must have required property '$ref'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

### Path: /paths/\~1published\~1\{project_name\}\~1\{repository_name\}\~1\{architecture_name\}\~1\{binary_filename\}\?view=ymp/get/responses/200/content/application\~1xml; charset=utf-8/schema
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/opensuse.org/obs/2.10.50/openapi.yaml#L3980)

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

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |required |{"missingProperty":"$ref"}| must have required property '$ref'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

### Path: /paths/\~1published\~1\{project_name\}\~1\{repository_name\}\~1\{architecture_name\}\~1\{binary_filename\}\?view=ymp/get/responses/200
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/opensuse.org/obs/2.10.50/openapi.yaml#L3955)

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

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |required |{"missingProperty":"$ref"}| must have required property '$ref'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

    

## API: royalmail\.com:click-and-drop (version: 1.0.0) 
swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/royalmail.com/click-and-drop/1.0.0/swagger.yaml)

API updated: 2023-03-06T07:12:59.965Z

### Path: /parameters/orderIdentifiers
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/royalmail.com/click-and-drop/1.0.0/swagger.yaml#L79)

Value: 
```json
{
  "description": "One or several Order Identifiers or Order References separated by semicolon. Order Identifiers are integer numbers. Order References are strings - each must be percent-encoded and surrounded by double quotation marks.",
  "example": "/orders/\"ref\";1001;\"Reference%3BWith%3BSpecial%3BSymbols!\";2345/",
  "in": "path",
  "name": "orderIdentifiers",
  "required": true,
  "type": "string"
}
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |required |{"missingProperty":"schema"}| must have required property 'schema'
   |additionalProperties |{"additionalProperty":"example"}| must NOT have additional properties
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

    