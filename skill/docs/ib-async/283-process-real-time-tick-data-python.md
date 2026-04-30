### Process Real-Time Tick Data (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes incoming real-time tick data, updating ticker information for price, size, and historical ticks. It handles different tick types, including regular price/size updates and dividend information. Dependencies include `TickData` and `Dividends` classes, and a `parseIBDatetime` function.

```python
result = self._processRtVolumeTick(ticker, tickType, value)
if result:
    price, size = result
    ticker.prevLast = ticker.last
    ticker.prevLastSize = ticker.lastSize
    ticker.last = price
    ticker.lastSize = size
    tick = TickData(self.lastTime, tickType, price, size)
    ticker.ticks.append(tick)
elif tickType == 59:
    # Dividend tick:
    # https://interactivebrokers.github.io/tws-api/tick_types.html#ib_dividends
    # example value: '0.83,0.92,20130219,0.23'
    past12, next12, nextDate, nextAmount = value.split(",")
    ticker.dividends = Dividends(
        float(past12) if past12 else None,
        float(next12) if next12 else None,
        parseIBDatetime(nextDate) if nextDate else None,
        float(nextAmount) if nextAmount else None,
    )
else:
    self._logger.error(
        f"tickString with tickType {tickType}: unhandled value: {value!r}"
    )

self.pendingTickers.add(ticker)
except ValueError:
    self._logger.error(
        f"tickString with tickType {tickType}: malformed value: {value!r}"
    )
```
