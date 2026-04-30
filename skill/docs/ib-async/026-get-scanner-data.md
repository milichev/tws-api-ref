### GET /scanner-data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Performs a market scan based on provided subscription filters.

```APIDOC
## GET /scanner-data

### Description
Executes a blocking market scan by starting a subscription and returning the initial result set.

### Method
GET

### Endpoint
/scanner-data

### Parameters
#### Query Parameters
- **subscription** (ScannerSubscription) - Required - Basic scan filters.
- **scannerSubscriptionOptions** (list) - Optional - Generic options.

### Response
#### Success Response (200)
- **results** (ScanDataList) - List of scan results.

### Response Example
{
  "results": [{"symbol": "AAPL", "change": "+1.2%"}]
}
```
