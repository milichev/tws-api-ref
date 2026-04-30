### ContractDetails Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides comprehensive metadata for a specific contract, including trading hours, market rules, and industry classification.

```APIDOC
## GET /ContractDetails

### Description
Retrieves detailed market information for a given contract, including valid order types and trading hours.

### Method
GET

### Parameters
#### Query Parameters
- **conId** (int) - Required - The contract ID to fetch details for

### Response
#### Success Response (200)
- **marketName** (string) - The market name
- **minTick** (float) - Minimum price increment
- **orderTypes** (string) - Comma-separated list of supported order types
- **tradingHours** (string) - Available trading hours

### Response Example
{
  "marketName": "NASDAQ",
  "minTick": 0.01,
  "orderTypes": "LIMIT,MARKET",
  "tradingHours": "0930-1600"
}
```
