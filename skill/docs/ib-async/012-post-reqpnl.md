### POST /reqPnL

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Starts a live subscription for profit and loss events for a specific account.

```APIDOC
## POST /reqPnL

### Description
Start a subscription for profit and loss events. Returns a PnL object that is kept live updated.

### Method
POST

### Endpoint
/reqPnL

### Parameters
#### Query Parameters
- **account** (str) - Required - The account ID to subscribe to.
- **modelCode** (str) - Optional - Filter for a specific account model.

### Response
#### Success Response (200)
- **pnl** (PnL) - A live-updated PnL object.

#### Response Example
{
  "dailyPnL": 150.50,
  "unrealizedPnL": 20.00
}
```
