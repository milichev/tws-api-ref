### GET /reqOpenOrders

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Requests and returns a list of open orders. Note that this method is blocking and may return stale information.

```APIDOC
## GET /reqOpenOrders

### Description
Request and return a list of open orders. It is recommended to use `openTrades()` or `openOrders()` instead for faster, more reliable data.

### Method
GET

### Endpoint
/reqOpenOrders

### Response
#### Success Response (200)
- **orders** (list[Trade]) - A list of currently open trade objects.

#### Response Example
[
  { "orderId": 123, "status": "Submitted" }
]
```
