### Create Bracket Order

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Instantiates a BracketOrder which bundles a parent order with specific take-profit and stop-loss orders.

```python
bracket = BracketOrder(parent=parent_order, takeProfit=tp_order, stopLoss=sl_order)
```
