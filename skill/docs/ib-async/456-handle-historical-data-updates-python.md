### Handle Historical Data Updates (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Manages updates to historical data. It parses the date, checks if the new bar is more recent than the last one, and updates or appends the bar accordingly. Emits bar update events.

```python
def historicalDataUpdate(self, reqId: int, bar: BarData):
        bars = self.reqId2Subscriber.get(reqId)
        if not bars:
            return

        bar.date = parseIBDatetime(bar.date)  # type: ignore
        lastDate = bars[-1].date
        if bar.date < lastDate:
            return

        hasNewBar = len(bars) == 0 or bar.date > lastDate
        if hasNewBar:
            bars.append(bar)
        elif bars[-1] != bar:
            bars[-1] = bar
        else:
            return

        self.ib.barUpdateEvent.emit(bars, hasNewBar)
        bars.updateEvent.emit(bars, hasNewBar)
```
