### Tick Filtering and Aggregation Operators (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

Defines the Tickfilter class for filtering ticks based on their type and provides methods to aggregate these ticks into different bar types (time-based, tick-count-based, volume-based). It emits aggregated bars when conditions are met. Dependencies include the Event and Op classes.

```python
class Tickfilter(Op):
    """Tick filtering event operators that ``emit(time, price, size)``."""

    __slots__ = ("_tickTypes",)

    def __init__(self, tickTypes, source=None):
        Op.__init__(self, source)
        self._tickTypes = set(tickTypes))



    def on_source(self, ticker):
        for t in ticker.ticks:
            if t.tickType in self._tickTypes:
                self.emit(t.time, t.price, t.size)



    def timebars(self, timer: Event) -> "TimeBars":
        """
        Aggregate ticks into time bars, where the timing of new bars
        is derived from a timer event.
        Emits a completed :class:`Bar`.

        This event stores a :class:`BarList` of all created bars in the
        ``bars`` property.

        Args:
            timer: Event for timing when a new bar starts.
        """
        return TimeBars(timer, self)



    def tickbars(self, count: int) -> "TickBars":
        """
        Aggregate ticks into bars that have the same number of ticks.
        Emits a completed :class:`Bar`.

        This event stores a :class:`BarList` of all created bars in the
        ``bars`` property.

        Args:
            count: Number of ticks to use to form one bar.
        """
        return TickBars(count, self)



    def volumebars(self, volume: int) -> "VolumeBars":
        """
        Aggregate ticks into bars that have the same volume.
        Emits a completed :class:`Bar`.

        This event stores a :class:`BarList` of all created bars in the
        ``bars`` property.

        Args:
            count: Number of ticks to use to form one bar.
        """
        return VolumeBars(volume, self)
```
