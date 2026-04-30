### GET /trades/orders

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves lists of trades, orders, and execution data for the current session.

```APIDOC
## GET /trades/orders

### Description
Fetches all trades, open trades, orders, open orders, fills, or executions associated with the current session.

### Method
GET

### Response
#### Success Response (200)
- **items** (list) - List of Trade, Order, Fill, or Execution objects.

### Response Example
{
  "items": [{"orderId": 1, "status": "Filled"}]
}
```
