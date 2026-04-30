### Market Data and PnL Requests

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Endpoints for requesting historical data, PnL updates, and market rules.

```APIDOC
## GET /reqPnL

### Description
Requests Profit and Loss (PnL) updates for a specific account or model.

### Method
GET

### Parameters
#### Query Parameters
- **reqId** (int) - Required - Unique identifier for the request.
- **account** (string) - Required - The account ID.
- **modelCode** (string) - Optional - The model code for the account.

### Response
#### Success Response (200)
- **status** (string) - Confirmation of PnL subscription.
```
