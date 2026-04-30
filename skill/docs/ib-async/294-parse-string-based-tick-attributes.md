### Parse String-based Tick Attributes

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles incoming string-based tick data, including timestamp conversions and fundamental ratio parsing. It uses mapping dictionaries to route data to the appropriate ticker attributes.

```python
def tickString(self, reqId: int, tickType: int, value: str):
    if not (ticker := self.reqId2Ticker.get(reqId)): return
    if tickType in STRING_TICK_MAP:
        setattr(ticker, STRING_TICK_MAP[tickType], value)
    elif tickType == 47:
        d = dict(t.split("=") for t in value.split(";") if t)
        ticker.fundamentalRatios = FundamentalRatios(**d)
```
