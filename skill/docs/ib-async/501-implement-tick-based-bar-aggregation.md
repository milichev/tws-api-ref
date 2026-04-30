### Implement Tick-Based Bar Aggregation

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

The Tickbars class aggregates raw tick data into bars based on a fixed count of ticks. It maintains a list of bars and emits an update event whenever a bar reaches the specified tick count threshold.

```python
class Tickbars(Op):
    __slots__ = ("_count", "bars")
    bars: BarList

    def __init__(self, count, source=None):
        Op.__init__(self, source)
        self._count = count
        self.bars = BarList()

    def on_source(self, time, price, size):
        if not self.bars or self.bars[-1].count == self._count:
            bar = Bar(time, price, price, price, price, size, 1)
            self.bars.append(bar)
        else:
            bar = self.bars[-1]
            bar.high = max(bar.high, price)
            bar.low = min(bar.low, price)
            bar.close = price
            bar.volume += size
            bar.count += 1
        if bar.count == self._count:
            self.bars.updateEvent.emit(self.bars, True)
            self.emit(self.bars)
```
