### Process Real-Time Bars (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles incoming real-time bar data. It converts the timestamp to a datetime object, creates a RealTimeBar object, and appends it to the subscriber's list. Emits bar update events to the main IB object and the bars object itself.

```python
def realtimeBar(
        self,
        reqId: int,
        time: int,
        open_: float,
        high: float,
        low: float,
        close: float,
        volume: float,
        wap: float,
        count: int,
    ):
        dt = datetime.fromtimestamp(time, self.defaultTimezone)
        bar = RealTimeBar(dt, -1, open_, high, low, close, volume, wap, count)
        bars = self.reqId2Subscriber.get(reqId)
        if bars is not None:
            bars.append(bar)
            self.ib.barUpdateEvent.emit(bars, True)
            bars.updateEvent.emit(bars, True)
```
