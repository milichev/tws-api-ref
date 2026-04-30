### Calculate Midpoint Price (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Calculates the midpoint price by averaging the bid and ask prices. Returns a default unset value if valid bid and ask prices are not available. This is a core component for determining market prices when direct bid/ask data is present.

```python
def midpoint(self) -> float:
    """
    Return average of bid and ask, or defaults.unset if no valid bid and ask
    are available.
    """
    return (self.bid + self.ask) * 0.5 if self.hasBidAsk() else self.defaults.unset
```
