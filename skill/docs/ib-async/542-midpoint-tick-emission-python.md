### Midpoint Tick Emission (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ticker.html

A specialized Tickfilter that emits midpoint ticks. It processes the ticker event and emits the time and midpoint price, with a size of 0. This is used for specific midpoint-related data streams.

```python
class Midpoints(Tickfilter):
    __slots__ = ()



    def on_source(self, ticker):
        if ticker.ticks:
            self.emit(ticker.time, ticker.midpoint(), 0)
```
