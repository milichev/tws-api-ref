### Cancel Order - Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Cancels an existing order and returns the associated `Trade` object. An optional `manualCancelOrderTime` can be provided for audit trail purposes.

```python
ib.cancelOrder(order, manualCancelOrderTime='')
```
