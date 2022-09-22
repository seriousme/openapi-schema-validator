# Results of real world testing
Report generated at: Thu Sep 22 2022 16:55:26 GMT+0000 (Coordinated Universal Time)

| APIs at [apis.guru](https://apis.guru) | #
|--------|-------|
|Total |2357 
|Tested |2357
|Failed validation | 53


## API: adyen\.com:CheckoutService (version: 68) 
OpenApi: [3.1.0](https://spec.openapis.org/oas/v3.1.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.1/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/adyen.com/CheckoutService/68/openapi.yaml)

API updated: 2021-11-12T23:18:19.544Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/adyen.com/CheckoutService/68/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |unevaluatedProperties |{"unevaluatedProperty":"source"}| must NOT have unevaluated properties

    

## API: adyen\.com:PaymentService (version: 68) 
OpenApi: [3.1.0](https://spec.openapis.org/oas/v3.1.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.1/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/adyen.com/PaymentService/68/openapi.yaml)

API updated: 2021-11-12T23:18:19.544Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/adyen.com/PaymentService/68/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |unevaluatedProperties |{"unevaluatedProperty":"source"}| must NOT have unevaluated properties

    

## API: adyen\.com:PayoutService (version: 68) 
OpenApi: [3.1.0](https://spec.openapis.org/oas/v3.1.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.1/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/adyen.com/PayoutService/68/openapi.yaml)

API updated: 2021-11-12T23:18:19.544Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/adyen.com/PayoutService/68/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |unevaluatedProperties |{"unevaluatedProperty":"source"}| must NOT have unevaluated properties

    

## API: adyen\.com:RecurringService (version: 68) 
OpenApi: [3.1.0](https://spec.openapis.org/oas/v3.1.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.1/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/adyen.com/RecurringService/68/openapi.yaml)

API updated: 2021-11-02T23:15:52.596Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/adyen.com/RecurringService/68/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |unevaluatedProperties |{"unevaluatedProperty":"source"}| must NOT have unevaluated properties

    

## API: airport-web\.appspot\.com (version: v1) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
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

    

## API: ato\.gov\.au (version: 0.0.6) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/ato.gov.au/0.0.6/swagger.yaml)

API updated: 2017-09-06T11:44:38.000Z

### Path: /paths/\~1individuals\~1\{partyId\}/delete/responses/400
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/ato.gov.au/0.0.6/swagger.yaml#L902)

Value: 
```json
{
  "$ref": "#/responses/FailedPrecondition",
  "description": "Individual has related resources and cannot be deleted"
}
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"$ref"}| must NOT have additional properties
   |additionalProperties |{"additionalProperty":"description"}| must NOT have additional properties
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

    

## API: azure\.com:servicebus (version: 2017-04-01) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
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
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
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

    

## API: gambitcomm\.local:mimic (version: 21.00) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
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

    

## API: googleapis\.com:accessapproval (version: v1) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/accessapproval/v1/openapi.yaml)

API updated: 2022-08-29T23:11:50.392Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/accessapproval/v1/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:admin (version: reports_v1) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/admin/reports_v1/openapi.yaml)

API updated: 2021-12-08T23:09:48.755Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/admin/reports_v1/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:adsense (version: v2) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/adsense/v2/openapi.yaml)

API updated: 2022-09-21T23:12:08.137Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/adsense/v2/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:bigqueryreservation (version: v1) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/bigqueryreservation/v1/openapi.yaml)

API updated: 2022-08-24T23:11:07.299Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/bigqueryreservation/v1/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:cloudbilling (version: v1beta) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/cloudbilling/v1beta/openapi.yaml)

API updated: 2022-09-19T23:12:49.727Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/cloudbilling/v1beta/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:cloudbuild (version: v1beta1) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/cloudbuild/v1beta1/openapi.yaml)

API updated: 2022-09-02T23:11:04.545Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/cloudbuild/v1beta1/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:cloudfunctions (version: v2) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/cloudfunctions/v2/openapi.yaml)

API updated: 2022-09-05T23:12:55.703Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/cloudfunctions/v2/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:cloudshell (version: v1) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/cloudshell/v1/openapi.yaml)

API updated: 2022-03-23T23:15:18.095Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/cloudshell/v1/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:container (version: v1beta1) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/container/v1beta1/openapi.yaml)

API updated: 2022-09-14T23:12:23.050Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/container/v1beta1/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:datastore (version: v1beta1) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/datastore/v1beta1/openapi.yaml)

API updated: 2022-02-14T23:08:57.692Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/datastore/v1beta1/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:dfareporting (version: v3.4) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/dfareporting/v3.4/openapi.yaml)

API updated: undefined

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/dfareporting/v3.4/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:displayvideo (version: v2) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/displayvideo/v2/openapi.yaml)

API updated: 2022-09-20T23:12:22.749Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/displayvideo/v2/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:dns (version: v2) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/dns/v2/openapi.yaml)

API updated: 2022-09-09T23:12:02.103Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/dns/v2/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:file (version: v1beta1) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/file/v1beta1/openapi.yaml)

API updated: 2022-08-12T23:10:40.199Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/file/v1beta1/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:firebaseappcheck (version: v1) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/firebaseappcheck/v1/openapi.yaml)

API updated: 2022-04-29T23:10:53.381Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/firebaseappcheck/v1/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:firebasehosting (version: v1beta1) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/firebasehosting/v1beta1/openapi.yaml)

API updated: 2022-06-02T23:11:00.502Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/firebasehosting/v1beta1/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:firestore (version: v1beta2) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/firestore/v1beta2/openapi.yaml)

API updated: 2022-03-24T23:10:34.757Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/firestore/v1beta2/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:gameservices (version: v1beta) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/gameservices/v1beta/openapi.yaml)

API updated: 2022-09-02T23:11:04.545Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/gameservices/v1beta/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:genomics (version: v2alpha1) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/genomics/v2alpha1/openapi.yaml)

API updated: 2022-03-29T23:10:57.754Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/genomics/v2alpha1/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:healthcare (version: v1beta1) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/healthcare/v1beta1/openapi.yaml)

API updated: 2022-08-17T23:12:11.899Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/healthcare/v1beta1/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:iam (version: v2beta) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/iam/v2beta/openapi.yaml)

API updated: 2022-07-20T23:12:06.710Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/iam/v2beta/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:identitytoolkit (version: v2) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/identitytoolkit/v2/openapi.yaml)

API updated: 2022-09-21T23:12:08.137Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/identitytoolkit/v2/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:jobs (version: v4) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/jobs/v4/openapi.yaml)

API updated: 2022-07-21T23:12:10.721Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/jobs/v4/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:managedidentities (version: v1beta1) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/managedidentities/v1beta1/openapi.yaml)

API updated: 2022-09-05T23:12:55.703Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/managedidentities/v1beta1/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:monitoring (version: v1) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/monitoring/v1/openapi.yaml)

API updated: 2022-09-21T23:12:08.137Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/monitoring/v1/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:osconfig (version: v1beta) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/osconfig/v1beta/openapi.yaml)

API updated: 2022-07-26T23:10:14.384Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/osconfig/v1beta/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:policytroubleshooter (version: v1beta) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/policytroubleshooter/v1beta/openapi.yaml)

API updated: 2022-08-29T23:11:50.392Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/policytroubleshooter/v1beta/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:pubsub (version: v1beta2) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/pubsub/v1beta2/openapi.yaml)

API updated: 2022-09-08T23:13:09.421Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/pubsub/v1beta2/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:redis (version: v1beta1) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/redis/v1beta1/openapi.yaml)

API updated: 2022-05-23T23:11:26.267Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/redis/v1beta1/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:run (version: v2) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/run/v2/openapi.yaml)

API updated: 2022-09-05T23:12:55.703Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/run/v2/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:securitycenter (version: v1p1alpha1) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/securitycenter/v1p1alpha1/openapi.yaml)

API updated: 2022-09-21T23:12:08.137Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/securitycenter/v1p1alpha1/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:servicecontrol (version: v2) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/servicecontrol/v2/openapi.yaml)

API updated: 2022-04-15T23:10:59.877Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/servicecontrol/v2/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:speech (version: v2beta1) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/speech/v2beta1/openapi.yaml)

API updated: undefined

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/speech/v2beta1/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:tpu (version: v2alpha1) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/tpu/v2alpha1/openapi.yaml)

API updated: 2022-09-12T23:11:57.151Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/tpu/v2alpha1/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:verifiedaccess (version: v2) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/verifiedaccess/v2/openapi.yaml)

API updated: 2022-06-29T23:10:37.342Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/verifiedaccess/v2/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: googleapis\.com:vision (version: v1p2beta1) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/vision/v1p2beta1/openapi.yaml)

API updated: 2022-09-21T23:12:08.137Z

### Path: 
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/googleapis.com/vision/v1p2beta1/openapi.yaml#L1)

Value: content too large

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"source"}| must NOT have additional properties

    

## API: openapi-generator\.tech (version: 5.2.1) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/openapi-generator.tech/5.2.1/swagger.yaml)

API updated: 2021-08-23T09:34:59.789Z

### Path: /paths/\~1api\~1gen\~1clients\~1\{language\}/get/responses/200/schema/additionalProperties
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/openapi-generator.tech/5.2.1/swagger.yaml#L61)

Value: 
```json
{
  "$ref": "#/definitions/CliOption",
  "originalRef": "CliOption"
}
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"originalRef"}| must NOT have additional properties
   |type |{"type":"boolean"}| must be boolean
   |anyOf |{}| must match a schema in anyOf

### Path: /paths/\~1api\~1gen\~1clients\~1\{language\}/get/responses/200/schema
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/openapi-generator.tech/5.2.1/swagger.yaml#L60)

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

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"additionalProperties"}| must NOT have additional properties
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

### Path: /paths/\~1api\~1gen\~1clients\~1\{language\}/get/responses/200
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/openapi-generator.tech/5.2.1/swagger.yaml#L58)

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

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |required |{"missingProperty":"$ref"}| must have required property '$ref'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

    

## API: opensuse\.org:obs (version: 2.10.50) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
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

    

## API: parliament\.uk:statutoryinstruments (version: v1) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/parliament.uk/statutoryinstruments/v1/swagger.yaml)

API updated: 2021-06-21T12:16:53.715Z

### Path: /info/contact/url
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/parliament.uk/statutoryinstruments/v1/swagger.yaml#L6)

Value: 
```json
""
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri"}| must match format "uri"

    

## API: parliament\.uk:treaties (version: v1) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/parliament.uk/treaties/v1/swagger.yaml)

API updated: 2021-05-24T10:27:51.952Z

### Path: /info/contact/url
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/parliament.uk/treaties/v1/swagger.yaml#L6)

Value: 
```json
""
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri"}| must match format "uri"

    

## API: prss\.org (version: 2.0.0) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/prss.org/2.0.0/swagger.yaml)

API updated: 2021-06-21T12:16:53.715Z

### Path: /paths/\~1api\~1v2\~1metapub\~1program-information\~1batch/post/responses/202/schema/externalDocs/url
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/prss.org/2.0.0/swagger.yaml#L417)

Value: 
```json
"/api/epg-cd-mapping.html"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri"}| must match format "uri"

### Path: /paths/\~1api\~1v2\~1metapub\~1program-information\~1batch/post/responses/202/schema
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

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |required |{"missingProperty":"type"}| must have required property 'type'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

### Path: /paths/\~1api\~1v2\~1metapub\~1program-information\~1batch/post/responses/202
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

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |required |{"missingProperty":"$ref"}| must have required property '$ref'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

    

## API: trashnothing\.com (version: 1.2) 
OpenApi: [3.0.0](https://spec.openapis.org/oas/v3.0.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/trashnothing.com/1.2/openapi.yaml)

API updated: 2021-07-26T08:51:53.432Z

### Path: /info/termsOfService
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/trashnothing.com/1.2/openapi.yaml#L15)

Value: 
```json
"https://trashnothing.com/tos\n"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri-reference"}| must match format "uri-reference"

    

## API: twinehealth\.com (version: v7.78.1) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/twinehealth.com/v7.78.1/swagger.yaml)

API updated: 2021-06-21T12:16:53.715Z

### Path: /securityDefinitions/OAuth2
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

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |additionalProperties |{"additionalProperty":"flow"}| must NOT have additional properties
   |required |{"missingProperty":"name"}| must have required property 'name'
   |required |{"missingProperty":"authorizationUrl"}| must have required property 'authorizationUrl'
   |oneOf |{"passingSchemas":null}| must match exactly one schema in oneOf

### Path: /securityDefinitions/OAuth2/flow
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/twinehealth.com/v7.78.1/swagger.yaml#L81)

Value: 
```json
"application"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |enum |{"allowedValues":["password"]}| must be equal to one of the allowed values

### Path: /securityDefinitions/OAuth2/tokenUrl
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/twinehealth.com/v7.78.1/swagger.yaml#L85)

Value: 
```json
"/oauth/token"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri"}| must match format "uri"

    

## API: whapi\.com:numbers (version: 2.0) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/whapi.com/numbers/2.0/swagger.yaml)

API updated: 2021-06-21T12:16:53.715Z

### Path: /info/license/url
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/whapi.com/numbers/2.0/swagger.yaml#L12)

Value: 
```json
"www.williamhill.com"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |format |{"format":"uri"}| must match format "uri"

    