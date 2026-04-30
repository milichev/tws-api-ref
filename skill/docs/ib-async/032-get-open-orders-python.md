### Get Open Orders (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of all currently open orders. Orders are considered open if their status is not in the 'DoneStates'.

```python
def openOrders(self) -> list[Order]:
    """List of all open orders."""
    return [
        trade.order
        for trade in self.wrapper.trades.values()
        if trade.orderStatus.status not in OrderStatus.DoneStates
    ]
```
