### Get Real-time Bars (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of all live updated bars. These can be 5-second real-time bars or live updated historical bars.

```python
def realtimeBars(self) -> list[BarDataList | RealTimeBarList]:
    """
    Get a list of all live updated bars. These can be 5 second realtime
    bars or live updated historical bars.
    """
    return list(self.wrapper.reqId2Subscriber.values())
```
