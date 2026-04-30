### Ticker Event Tick Filtering (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Provides methods to filter specific types of ticks (trades, bids, asks, bid-asks, midpoints) from a ticker event. It utilizes a Tickfilter class which takes a set of tick types to include. This allows for selective processing of market data.

```python
class TickerUpdateEvent(Event):
    __slots__ = ()



    def trades(self) -> "Tickfilter":
        """Emit trade ticks."""
        return Tickfilter((4, 5, 48, 68, 71), self)



    def bids(self) -> "Tickfilter":
        """Emit bid ticks."""
        return Tickfilter((0, 1, 66, 69), self)



    def asks(self) -> "Tickfilter":
        """Emit ask ticks."""
        return Tickfilter((2, 3, 67, 70), self)



    def bidasks(self) -> "Tickfilter":
        """Emit bid and ask ticks."""
        return Tickfilter((0, 1, 66, 69, 2, 3, 67, 70), self)



    def midpoints(self) -> "Tickfilter":
        """Emit midpoint ticks."""
        return Midpoints((), self)
```
