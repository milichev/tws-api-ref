### Time-Based Bar Aggregation (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Implements the aggregation of ticks into time-based bars. It uses a timer event to determine when a new bar should start. The `on_source` method updates the current bar with incoming tick data, and `_on_timer` finalizes the previous bar and starts a new one.

```python
class TimeBars(Op):
    __slots__ = (
        "_timer",
        "bars",
    )
    __doc__ = Tickfilter.timebars.__doc__

    bars: BarList

    def __init__(self, timer, source=None):
        Op.__init__(self, source)
        self._timer = timer
        self._timer.connect(self._on_timer, None, self._on_timer_done)
        self.bars = BarList()



    def on_source(self, time, price, size):
        if not self.bars:
            return
        bar = self.bars[-1]

        if isNan(bar.open):
            bar.open = bar.high = bar.low = price

        bar.high = max(bar.high, price)
        bar.low = min(bar.low, price)
        bar.close = price
        bar.volume += size
        bar.count += 1
        self.bars.updateEvent.emit(self.bars, False)


    def _on_timer(self, time):
        if self.bars:
            bar = self.bars[-1]
            if isNan(bar.close) and len(self.bars) > 1:
                bar.open = bar.high = bar.low = bar.close = self.bars[-2].close

            self.bars.updateEvent.emit(self.bars, True)
            self.emit(bar)

        self.bars.append(Bar(time))

    def _on_timer_done(self, timer):
        self._timer = None
        self.set_done()
```
