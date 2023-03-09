# Results of real world testing
Report generated at: Thu Mar 09 2023 16:44:48 GMT+0000 (Coordinated Universal Time)

| APIs at [apis.guru](https://apis.guru) | #
|--------|-------|
|Total |2503 
|Tested |2503
|Failed validation | 35


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

    

## API: amadeus\.com:amadeus-hotel-name-autocomplete (version: 1.0.3) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-hotel-name-autocomplete/1.0.3/swagger.yaml)

API updated: 2023-03-05T12:15:20.931Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-hotel-name-autocomplete/1.0.3/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-flight-inspiration-search (version: 1.0.6) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-inspiration-search/1.0.6/swagger.yaml)

API updated: 2023-03-05T12:15:36.706Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-inspiration-search/1.0.6/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-flight-choice-prediction (version: 2.0.2) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-choice-prediction/2.0.2/swagger.yaml)

API updated: 2023-03-05T12:15:52.364Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-choice-prediction/2.0.2/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-flight-delay-prediction (version: 1.0.6) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-delay-prediction/1.0.6/swagger.yaml)

API updated: 2023-03-05T12:16:08.146Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-delay-prediction/1.0.6/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-flight-most-booked-destinations (version: 1.1.1) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-most-booked-destinations/1.1.1/swagger.yaml)

API updated: 2023-03-05T12:16:23.796Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-most-booked-destinations/1.1.1/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-flight-busiest-traveling-period (version: 1.0.2) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-busiest-traveling-period/1.0.2/swagger.yaml)

API updated: 2023-03-05T12:16:39.476Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-busiest-traveling-period/1.0.2/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-flight-cheapest-date-search (version: 1.0.6) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-cheapest-date-search/1.0.6/swagger.yaml)

API updated: 2023-03-05T12:16:54.840Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-cheapest-date-search/1.0.6/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-flight-check-in-links (version: 2.1.2) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-check-in-links/2.1.2/swagger.yaml)

API updated: 2023-03-05T12:17:10.821Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-check-in-links/2.1.2/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-trip-purpose-prediction (version: 1.1.4) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-trip-purpose-prediction/1.1.4/swagger.yaml)

API updated: 2023-03-05T12:17:26.380Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-trip-purpose-prediction/1.1.4/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-flight-order-management (version: 1.9.0) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-order-management/1.9.0/swagger.yaml)

API updated: 2023-03-05T12:17:58.150Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-order-management/1.9.0/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-airline-code-lookup (version: 1.1.1) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-airline-code-lookup/1.1.1/swagger.yaml)

API updated: 2023-03-05T12:18:14.544Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-airline-code-lookup/1.1.1/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-hotel-ratings (version: 1.0.2) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-hotel-ratings/1.0.2/swagger.yaml)

API updated: 2023-03-05T12:18:30.297Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-hotel-ratings/1.0.2/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-on-demand-flight-status (version: 2.0.2) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-on-demand-flight-status/2.0.2/swagger.yaml)

API updated: 2023-03-05T12:18:46.047Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-on-demand-flight-status/2.0.2/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-seatmap-display (version: 1.9.2) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-seatmap-display/1.9.2/swagger.yaml)

API updated: 2023-03-05T12:19:17.647Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-seatmap-display/1.9.2/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-points-of-interest (version: 1.1.1) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-points-of-interest/1.1.1/swagger.yaml)

API updated: 2023-03-05T12:19:33.676Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-points-of-interest/1.1.1/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-safe-place- (version: 1.0.0) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-safe-place-/1.0.0/swagger.yaml)

API updated: 2023-03-05T12:19:49.370Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-safe-place-/1.0.0/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-hotel-search (version: 3.0.8) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-hotel-search/3.0.8/swagger.yaml)

API updated: 2023-03-05T12:20:21.228Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-hotel-search/3.0.8/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-hotel-booking (version: 1.1.2) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-hotel-booking/1.1.2/swagger.yaml)

API updated: 2023-03-05T12:20:37.042Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-hotel-booking/1.1.2/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-flight-offers-price (version: 1.2.2) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-offers-price/1.2.2/swagger.yaml)

API updated: 2023-03-05T12:20:53.525Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-offers-price/1.2.2/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-tours-and-activities (version: 1.0.2) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-tours-and-activities/1.0.2/swagger.yaml)

API updated: 2023-03-05T12:21:08.974Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-tours-and-activities/1.0.2/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-airport-&-city-search (version: 1.2.3) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-airport-&-city-search/1.2.3/swagger.yaml)

API updated: 2023-03-05T12:21:24.642Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-airport-&-city-search/1.2.3/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-flight-create-orders (version: 1.9.0) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-create-orders/1.9.0/swagger.yaml)

API updated: 2023-03-05T12:21:40.303Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-create-orders/1.9.0/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-flight-availabilities-search (version: 1.0.2) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-availabilities-search/1.0.2/swagger.yaml)

API updated: 2023-03-05T12:21:56.087Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-availabilities-search/1.0.2/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-branded-fares-upsell (version: 1.0.1) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-branded-fares-upsell/1.0.1/swagger.yaml)

API updated: 2023-03-05T12:22:11.638Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-branded-fares-upsell/1.0.1/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-airport-on-time-performance (version: 1.0.4) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-airport-on-time-performance/1.0.4/swagger.yaml)

API updated: 2023-03-05T12:22:27.409Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-airport-on-time-performance/1.0.4/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-airport-nearest-relevant (version: 1.1.2) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-airport-nearest-relevant/1.1.2/swagger.yaml)

API updated: 2023-03-05T12:22:42.950Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-airport-nearest-relevant/1.1.2/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

## API: amadeus\.com:amadeus-flight-most-traveled-destinations (version: 1.1.1) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v2.0/schema.json)

API on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-most-traveled-destinations/1.1.1/swagger.yaml)

API updated: 2023-03-05T16:52:06.509Z

### Path: /host
Path on Github: [link](https://github.com/APIs-guru/openapi-directory/blob/main/APIs/amadeus.com/amadeus-flight-most-traveled-destinations/1.1.1/swagger.yaml#L4)

Value: 
```json
"https://developers.amadeus.com/PAS-EAS/api/v1/cms-gateway/sites/default/files/2019-09/logo-portal.png"
```

AJV errors:

   |Keyword |Params |Message |
   |--------|-------|--------|
   |pattern |{"pattern":"^[^{}/ :\\\\]+(?::\\d+)?$"}| must match pattern "^[^{}/ :\\]+(?::\d+)?$"

    

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

    

## API: discourse\.local (version: latest) 
OpenApi: [3.0.3](https://spec.openapis.org/oas/v3.0.3)
[JSON Schema](https://github.com/seriousme/openapi-schema-validator/tree/master/schemas/v3.0/schema.json)

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

    

## API: linode\.com (version: 4.145.0) 
OpenApi: [3.0.1](https://spec.openapis.org/oas/v3.0.1)
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

    

## API: royalmail\.com:click-and-drop (version: 1.0.0) 
Swagger: [2.0](https://spec.openapis.org/oas/v2.0)
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

    