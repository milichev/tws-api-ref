### BracketOrder

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a bracket order, which includes a parent order and associated take-profit and stop-loss orders.

```APIDOC
## BracketOrder

### Description
Represents a bracket order, a type of order that simultaneously places a primary order along with two secondary orders: a take-profit order and a stop-loss order. When the primary order is filled, the secondary orders are placed. If either secondary order is executed, the remaining order is cancelled.

### Properties
- `parent` (Order): The primary order of the bracket.
- `takeProfit` (Order): The take-profit order.
- `stopLoss` (Order): The stop-loss order.
```
