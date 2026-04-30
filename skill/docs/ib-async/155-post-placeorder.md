### POST /placeOrder

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Places a new order in the Interactive Brokers system.

```APIDOC
## POST /placeOrder

### Description
Submits a new order to the exchange. Handles complex order types including combo legs and algorithmic routing.

### Method
POST

### Endpoint
/placeOrder

### Parameters
#### Request Body
- **orderId** (int) - Required - Unique identifier for the order.
- **contract** (object) - Required - The contract to trade.
- **order** (object) - Required - The order details including quantity, type, and price.

### Request Example
{
  "orderId": 5001,
  "contract": { "conId": 12345, "secType": "STK" },
  "order": { "action": "BUY", "totalQuantity": 100, "orderType": "LMT", "lmtPrice": 150.00 }
}
```
