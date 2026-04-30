### Initialize and Validate Ticker Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

The Ticker class uses a post-init hook to initialize market data fields to default unset values. It includes helper methods like hasBidAsk to verify if valid market liquidity exists for a given ticker.

```python
def __post_init__(self):
    if not self.created:
        self.updateEvent = TickerUpdateEvent("updateEvent")
        self.bid = self.defaults.unset
        self.ask = self.defaults.unset
        # ... additional field initializations ...
        self.created = True

def isUnset(self, value) -> bool:
    dev = self.defaults.unset
    return (dev != dev and value != value) or (value == dev)

def hasBidAsk(self) -> bool:
    """See if this ticker has a valid bid and ask."""
    return (
        self.bid != -1
        and not self.isUnset(self.bid)
        and self.bidSize > 0
        and self.ask != -1
        and not self.isUnset(self.ask)
        and self.askSize > 0
    )
```
