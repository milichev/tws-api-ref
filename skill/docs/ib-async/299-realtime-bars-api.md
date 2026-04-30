### Realtime Bars API

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

This API allows you to request real-time streaming bar data for a specified contract. You can configure the bar size, data source, and whether to use regular trading hours.

```APIDOC
## POST /api/realtimeBars

### Description
Request realtime 5 second bars.

### Method
POST

### Endpoint
/api/realtimeBars

### Parameters
#### Path Parameters
None

#### Query Parameters
* **contract** (Contract) - Required - Contract of interest.
* **barSize** (int) - Required - Must be 5.
* **whatToShow** (str) - Required - Specifies the source for constructing bars. Can be 'TRADES', 'MIDPOINT', 'BID' or 'ASK'.
* **useRTH** (bool) - Required - If True then only show data from within Regular Trading Hours, if False then show all data.
* **realTimeBarsOptions** (list[TagValue]) - Optional - Unknown.

### Request Example
```json
{
  "contract": {"symbol": "AAPL", "secType": "STK", "exchange": "SMART", "currency": "USD"},
  "barSize": 5,
  "whatToShow": "TRADES",
  "useRTH": true,
  "realTimeBarsOptions": []
}
```

### Response
#### Success Response (200)
- **reqId** (int) - The unique ID for the request.
- **contract** (Contract) - The contract details.
- **barSize** (int) - The bar size requested.
- **whatToShow** (str) - The data source used.
- **useRTH** (bool) - Whether regular trading hours were used.
- **realTimeBarsOptions** (list[TagValue]) - Options used for the request.

#### Response Example
```json
{
  "reqId": 1,
  "contract": {"symbol": "AAPL", "secType": "STK", "exchange": "SMART", "currency": "USD"},
  "barSize": 5,
  "whatToShow": "TRADES",
  "useRTH": true,
  "realTimeBarsOptions": []
}
```
```
