### Order Management

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Endpoints for managing and retrieving open orders, completed orders, and auto-opening orders.

```APIDOC
## POST /reqAutoOpenOrders

### Description
Retrieves automatically opened orders.

### Method
POST

### Endpoint
/reqAutoOpenOrders

### Parameters
#### Query Parameters
- **_bAutoBind_** (boolean) - Optional - Indicates whether to auto-bind orders.

### Request Example
```json
{
  "_bAutoBind_": true
}
```

### Response
#### Success Response (200)
- **orders** (array) - List of automatically opened orders.

#### Response Example
```json
{
  "orders": [
    {
      "orderId": 12345,
      "action": "BUY",
      "quantity": 100,
      "orderType": "LMT",
      "limitPrice": 100.50
    }
  ]
}
```

## POST /reqAllOpenOrders

### Description
Retrieves all currently open orders.

### Method
POST

### Endpoint
/reqAllOpenOrders

### Response
#### Success Response (200)
- **orders** (array) - List of all open orders.

#### Response Example
```json
{
  "orders": [
    {
      "orderId": 12346,
      "action": "SELL",
      "quantity": 50,
      "orderType": "MKT"
    }
  ]
}
```

## POST /reqCompletedOrders

### Description
Retrieves completed orders.

### Method
POST

### Endpoint
/reqCompletedOrders

### Parameters
#### Query Parameters
- **_apiOnly_** (boolean) - Optional - Filters for orders placed via API.

### Response
#### Success Response (200)
- **orders** (array) - List of completed orders.

#### Response Example
```json
{
  "orders": [
    {
      "orderId": 12347,
      "status": "Filled",
      "averagePrice": 99.75
    }
  ]
}
```
```
