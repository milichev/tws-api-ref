### Order Object Documentation

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides a comprehensive overview of the Order object, including its attributes and their data types, used for defining trading orders.

```APIDOC
## Order Object

### Description
Represents an order for trading contracts on the Interactive Brokers platform. This object contains numerous parameters to specify order details such as action, quantity, price, time-in-force, and advanced trading strategies.

### Endpoint
N/A (This is a data structure documentation)

### Parameters

#### Core Order Parameters
- **orderId** (int) - Unique identifier for the order.
- **clientId** (int) - Identifier for the client application submitting the order.
- **permId** (int) - Permanent identifier for the order.
- **action** (str) - The action to be taken (e.g., 'BUY', 'SELL').
- **totalQuantity** (float) - The total number of shares or contracts to trade.
- **orderType** (str) - The type of order (e.g., 'MKT', 'LMT', 'STP').
- **lmtPrice** (float | Decimal | None) - The limit price for limit orders.
- **auxPrice** (float | Decimal | None) - Auxiliary price, often used for stop orders or other specific order types.
- **tif** (str) - Time-in-force (e.g., 'DAY', 'GTC').
- **activeStartTime** (str) - The start time for an active order.
- **activeStopTime** (str) - The stop time for an active order.
- **ocaGroup** (str) - Order Grouping for One-Cancels-All (OCA) orders.
- **ocaType** (int) - Type of OCA order.
- **orderRef** (str) - Reference string for the order.
- **transmit** (bool) - Whether to transmit the order immediately.
- **parentId** (int) - Identifier for a parent order in a bracket order.
- **blockOrder** (bool) - Indicates if this is a block order.
- **sweepToFill** (bool) - Whether to sweep to fill the order.
- **displaySize** (int) - The size to display for the order.
- **triggerMethod** (int) - Method used to trigger the order.
- **outsideRth** (bool) - Whether the order can be executed outside regular trading hours.
- **hidden** (bool) - Whether the order is hidden.
- **goodAfterTime** (str) - The time after which the order becomes effective.

_... (Many more parameters exist for advanced order types, options, futures, and algorithmic trading. Refer to the official documentation for a complete list.)_

### Request Example
```json
{
  "orderId": 1,
  "clientId": 100,
  "action": "BUY",
  "totalQuantity": 100.0,
  "orderType": "LMT",
  "lmtPrice": 50.50,
  "tif": "DAY"
}
```

### Response
#### Success Response (200)
- **orderId** (int) - The ID of the successfully placed order.
- **status** (str) - The status of the order (e.g., 'Submitted', 'Filled').

#### Response Example
```json
{
  "orderId": 1,
  "status": "Submitted"
}
```

### Further Information
For a complete list of all order parameters and their specific uses, please refer to the [official Interactive Brokers API documentation](https://interactivebrokers.github.io/tws-api/available_orders.html).
```
