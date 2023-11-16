# Results of real world testing
Report generated at: Thu Nov 16 2023 16:33:43 GMT+0000 (Coordinated Universal Time)

| APIs at [apis.guru](https://apis.guru) | #
|--------|-------|
|Total |2529 
|Tested |2529
|Failed validation | 32


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

    

## API: appwrite\.io:client (version: 0.9.3) 
openapi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/appwrite.io/client/0.9.3/openapi.yaml)

API updated: 2021-08-12T15:35:25.275Z

Validation error: $id : '[object Object]' defined more than once at #/components/schemas/document/properties
    

## API: appwrite\.io:server (version: 0.9.3) 
openapi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/appwrite.io/server/0.9.3/openapi.yaml)

API updated: 2021-08-12T15:35:06.475Z

Validation error: $id : '[object Object]' defined more than once at #/components/schemas/document/properties
    

## API: azure\.com:network-interfaceEndpoint (version: 2019-02-01) 
swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/network-interfaceEndpoint/2019-02-01/swagger.yaml)

API updated: 2018-11-20T14:36:34.000Z

Validation error: Can't resolve ./networkInterface.json#/definitions/NetworkInterface, only internal refs are supported.
    

## API: azure\.com:network-loadBalancer (version: 2019-08-01) 
swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/network-loadBalancer/2019-08-01/swagger.yaml)

API updated: 2019-02-26T08:40:59.000Z

Validation error: Can't resolve ./networkInterface.json#/definitions/NetworkInterfaceIPConfiguration, only internal refs are supported.
    

## API: azure\.com:network-networkInterface (version: 2018-01-01) 
swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/network-networkInterface/2018-01-01/swagger.yaml)

API updated: 2018-03-10T09:23:51.000Z

Validation error: Can't resolve ./applicationGateway.json#/definitions/ApplicationGatewayBackendAddressPool, only internal refs are supported.
    

## API: azure\.com:network-networkProfile (version: 2019-08-01) 
swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/network-networkProfile/2019-08-01/swagger.yaml)

API updated: 2018-11-20T14:36:34.000Z

Validation error: Can't resolve ./virtualNetwork.json#/definitions/Subnet, only internal refs are supported.
    

## API: azure\.com:network-networkSecurityGroup (version: 2019-08-01) 
swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/network-networkSecurityGroup/2019-08-01/swagger.yaml)

API updated: 2018-11-20T14:36:34.000Z

Validation error: Can't resolve ./networkInterface.json#/definitions/NetworkInterface, only internal refs are supported.
    

## API: azure\.com:network-privateEndpoint (version: 2019-08-01) 
swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/network-privateEndpoint/2019-08-01/swagger.yaml)

API updated: 2019-07-25T10:27:32.000Z

Validation error: Can't resolve ./networkInterface.json#/definitions/NetworkInterface, only internal refs are supported.
    

## API: azure\.com:network-publicIpAddress (version: 2019-08-01) 
swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/network-publicIpAddress/2019-08-01/swagger.yaml)

API updated: 2018-03-10T09:23:51.000Z

Validation error: Can't resolve ./networkInterface.json#/definitions/IPConfiguration, only internal refs are supported.
    

## API: azure\.com:network-routeTable (version: 2019-08-01) 
swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/network-routeTable/2019-08-01/swagger.yaml)

API updated: 2018-03-10T09:23:51.000Z

Validation error: Can't resolve ./virtualNetwork.json#/definitions/Subnet, only internal refs are supported.
    

## API: azure\.com:network-serviceEndpointPolicy (version: 2019-08-01) 
swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/network-serviceEndpointPolicy/2019-08-01/swagger.yaml)

API updated: 2018-11-20T14:36:34.000Z

Validation error: Can't resolve ./virtualNetwork.json#/definitions/Subnet, only internal refs are supported.
    

## API: azure\.com:network-virtualNetwork (version: 2019-08-01) 
swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/network-virtualNetwork/2019-08-01/swagger.yaml)

API updated: 2018-11-20T14:36:34.000Z

Validation error: Can't resolve ./networkProfile.json#/definitions/IPConfigurationProfile, only internal refs are supported.
    

## API: azure\.com:network-virtualNetworkTap (version: 2019-08-01) 
swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/network-virtualNetworkTap/2019-08-01/swagger.yaml)

API updated: 2018-11-20T14:36:34.000Z

Validation error: Can't resolve ./loadBalancer.json#/definitions/FrontendIPConfiguration, only internal refs are supported.
    

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

    

## API: azure\.com:web-WebApps (version: 2018-11-01) 
swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/azure.com/web-WebApps/2018-11-01/swagger.yaml)

API updated: 2020-01-07T12:09:22.000Z

Validation error: Cannot set properties of undefined (setting 'items')
    

## API: box\.com (version: 2.0.0) 
openapi: [3.0.2](https://spec.openapis.org/oas/v3.0.2)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/box.com/2.0.0/openapi.yaml)

API updated: 2023-03-06T07:12:59.965Z

Validation error: $id : '01234500-12f1-1234-aa12-b1d234cb567e' defined more than once at #/components/schemas/File--Full/allOf/1/properties/metadata/allOf/0/example/enterprise_27335/marketingCollateral
    

## API: clarify\.io (version: 1.3.7) 
swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/clarify.io/1.3.7/swagger.yaml)

API updated: 2019-01-03T07:01:34.000Z

Validation error: Cannot set properties of undefined (setting '_embedded')
    

## API: cloud-elements\.com:ecwid (version: api-v2) 
swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/cloud-elements.com/ecwid/api-v2/swagger.yaml)

API updated: 2021-06-21T12:16:53.715Z

Validation error: Can't resolve [object Object], only internal refs are supported.
    

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

    

## API: github\.com:ghes-3\.6 (version: 1.1.4) 
openapi: [3.0.3](https://spec.openapis.org/oas/v3.0.3)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/github.com/ghes-3.6/1.1.4/openapi.yaml)

API updated: 2023-02-15T18:23:37.750Z

Validation error: Can't resolve [object Object], only internal refs are supported.
    

## API: github\.com:ghes-3\.7 (version: 1.1.4) 
openapi: [3.0.3](https://spec.openapis.org/oas/v3.0.3)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/github.com/ghes-3.7/1.1.4/openapi.yaml)

API updated: 2023-02-15T18:23:37.750Z

Validation error: Can't resolve [object Object], only internal refs are supported.
    

## API: github\.com:ghes-3\.8 (version: 1.1.4) 
openapi: [3.0.3](https://spec.openapis.org/oas/v3.0.3)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/github.com/ghes-3.8/1.1.4/openapi.yaml)

API updated: 2023-02-15T18:23:37.750Z

Validation error: Can't resolve [object Object], only internal refs are supported.
    

## API: googleapis\.com:discovery (version: v1) 
openapi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/discovery/v1/openapi.yaml)

API updated: 2023-04-21T23:09:23.065Z

Validation error: Can't resolve [object Object], only internal refs are supported.
    

## API: kubernetes\.io (version: unversioned) 
swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/kubernetes.io/unversioned/swagger.yaml)

API updated: 2023-03-06T07:12:59.965Z

Validation error: Can't resolve [object Object], only internal refs are supported.
    

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

    

## API: spotify\.com (version: 1.0.0) 
openapi: [3.0.3](https://spec.openapis.org/oas/v3.0.3)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/spotify.com/1.0.0/openapi.yaml)

API updated: 2023-02-17T17:54:09.755Z

Validation error: Can't resolve ../policies.yaml, only internal refs are supported.
    

## API: statsocial\.com (version: 1.0.0) 
openapi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/statsocial.com/1.0.0/openapi.yaml)

API updated: 2023-02-17T17:36:25.370Z

Validation error: Can't resolve #/components/schemas/18_24
    