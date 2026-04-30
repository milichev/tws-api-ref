### Implement Volume-Based Bar Aggregation

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

The VolumeBars class groups tick data into bars based on cumulative volume. When the accumulated volume of a bar meets or exceeds the defined threshold, the bar is finalized and emitted.

```python
class VolumeBars(Op):
    __slots__ = ("_volume", "bars")
    bars: BarList

    def __init__(self, volume, source=None):
        Op.__init__(self, source)
        self._volume = volume
        self.bars = BarList()

    def on_source(self, time, price, size):
        if not self.bars or self.bars[-1].volume >= self._volume:
            bar = Bar(time, price, price, price, price, size, 1)
            self.bars.append(bar)
        else:
            bar = self.bars[-1]
            bar.high = max(bar.high, price)
            bar.low = min(bar.low, price)
            bar.close = price
            bar.volume += size
            bar.count += 1
        if bar.volume >= self._volume:
            self.bars.updateEvent.emit(self.bars, True)
            self.emit(self.bars)
```
