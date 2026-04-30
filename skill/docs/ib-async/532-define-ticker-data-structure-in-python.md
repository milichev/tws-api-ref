### Define Ticker Data Structure in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

The Ticker class uses Python dataclasses to store comprehensive market information, including price levels, volume, Greeks, and order book data. It maintains lists for streaming ticks and provides an updateEvent for real-time monitoring.

```python
@dataclass
class Ticker:
    """Current market data such as bid, ask, last price, etc. for a contract."""
    events: ClassVar = ("updateEvent",)
    contract: Contract | None = None
    bid: float = nan
    ask: float = nan
    last: float = nan
    ticks: list[TickData] = field(default_factory=list)
    domBids: list[DOMLevel] = field(default_factory=list)
    domAsks: list[DOMLevel] = field(default_factory=list)
    bidGreeks: OptionComputation | None = None
```
