### Get Open Trades (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of all currently open order trades. Trades are considered open if their status is not in the 'DoneStates'.

```python
def openTrades(self) -> list[Trade]:
    """List of all open order trades."""
    return [
        v
        for v in self.wrapper.trades.values()
        if v.orderStatus.status not in OrderStatus.DoneStates
    ]
```
