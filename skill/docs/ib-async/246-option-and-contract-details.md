### Option and Contract Details

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Endpoints for exercising options, retrieving option parameters, and family codes.

```APIDOC
## POST /exerciseOptions

### Description
Exercises options for a given contract.

### Method
POST

### Endpoint
/exerciseOptions

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request.
- **_contract_** (object) - Required - Contract details of the option.
- **_exerciseAction_** (string) - Required - Action to perform ('EXERCISE' or 'ASSIGN').
- **_exerciseQuantity_** (integer) - Required - Quantity to exercise.
- **_account_** (string) - Required - The account identifier.
- **_override_** (integer) - Optional - Override settings (0 for false, 1 for true).

### Response
#### Success Response (200)
- **exerciseStatus** (string) - Status of the option exercise request.

#### Response Example
```json
{
  "exerciseStatus": "Submitted"
}
```

## POST /reqSecDefOptParams

### Description
Requests option parameters for a given underlying contract.

### Method
POST

### Endpoint
/reqSecDefOptParams

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request.
- **_underlyingSymbol_** (string) - Required - The underlying symbol.
- **_futFopExchange_** (string) - Required - The exchange for futures and options.
- **_underlyingSecType_** (string) - Required - The security type of the underlying (e.g., 'STK').
- **_underlyingConId_** (integer) - Required - The contract ID of the underlying.

### Response
#### Success Response (200)
- **optionParams** (array) - List of available option parameters (e.g., 'right', 'multiplier').

#### Response Example
```json
{
  "optionParams": [
    {
      "right": "Call",
      "multiplier": 100
    }
  ]
}
```

## POST /reqFamilyCodes

### Description
Retrieves a list of family codes used for grouping contracts.

### Method
POST

### Endpoint
/reqFamilyCodes

### Response
#### Success Response (200)
- **familyCodes** (array) - List of family code objects.

#### Response Example
```json
{
  "familyCodes": [
    {
      "familyCode": "EU.OPTS",
      "description": "European Options"
    }
  ]
}
```

## POST /reqMatchingSymbols

### Description
Finds matching symbols based on a pattern.

### Method
POST

### Endpoint
/reqMatchingSymbols

### Parameters
#### Query Parameters
- **_reqId_** (integer) - Required - Unique identifier for the request.
- **_pattern_
```
