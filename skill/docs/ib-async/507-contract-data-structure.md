### Contract Data Structure

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines the core Contract object and its associated properties used for identifying and configuring financial instruments.

```APIDOC
## GET /Contract

### Description
Represents a financial instrument contract with properties for identification, exchange routing, and specific asset details.

### Method
GET

### Parameters
#### Request Body
- **secType** (string) - Required - The security type (e.g., STK, OPT, FUT)
- **symbol** (string) - Required - The ticker symbol
- **exchange** (string) - Required - The destination exchange
- **currency** (string) - Required - The currency code
- **conId** (int) - Optional - Unique contract identifier

### Response
#### Success Response (200)
- **dict()** (method) - Returns object as a dictionary
- **tuple()** (method) - Returns object as a tuple
- **nonDefaults()** (method) - Returns only fields that differ from default values

### Response Example
{
  "secType": "STK",
  "symbol": "AAPL",
  "exchange": "SMART",
  "currency": "USD"
}
```
