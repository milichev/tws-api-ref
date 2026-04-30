### Handle Generic Tick Updates (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Updates ticker attributes with generic tick values. This function converts the input value to a float, ensuring it's positive, and then uses a mapping (`GENERIC_TICK_MAP`) to set the corresponding attribute on the ticker object. It also logs any malformed values and adds a `TickData` object to the ticker's history.

```python
def tickGeneric(self, reqId: int, tickType: int, value: float):
    ticker = self.reqId2Ticker.get(reqId)
    if not ticker:
        return

    try:
        value = float(value)
        value = value if value > 0 else self.defaultEmptySize
    except ValueError:
        self._logger.error(
            f"[tickType {tickType}] genericTick: malformed value: {value!r}"
        )
        return

    assert tickType in GENERIC_TICK_MAP, (
        f"Received tick {tickType=} {value=} but we don't have an attribute mapping for it? Triggered from {ticker.contract=}"
    )

    setattr(ticker, GENERIC_TICK_MAP[tickType], value)

    tick = TickData(self.lastTime, tickType, value, 0)
    ticker.ticks.append(tick)
    self.pendingTickers.add(ticker)
```
