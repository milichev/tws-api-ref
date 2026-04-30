### Process Real-Time Volume Ticks

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Parses complex real-time volume tick strings from the API. It extracts price, size, volume, and VWAP data, updating the ticker object accordingly.

```python
def _processRtVolumeTick(self, ticker: Ticker, tickType: int, value: str) -> tuple[float, float] | None:
    priceStr, sizeStr, rtTime, volume, vwap, _ = value.split(";")
    if volume:
        volumeField = RT_VOLUME_TICK_MAP[tickType]
        setattr(ticker, volumeField, float(volume))
    if vwap:
        ticker.vwap = float(vwap)
    if rtTime:
        ticker.rtTime = datetime.fromtimestamp(int(rtTime) / 1000, self.defaultTimezone)
    if priceStr == "":
        return None
    return (float(priceStr), float(sizeStr))
```
