### Process Market Depth Ticks (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles incoming market depth ticks, creating MktDepthData objects and adding them to a ticker. It also manages pending tickers for further processing.

```python
def tickMktDepth(self,
            reqId: int,
            pos: int,
            operation: int,
            side: int,
            price: float,
            size: int,
    ):
        # TODO: add optional debugging check. In a correctly working system, we should
        #       technically always have sequential bid and ask position entries, but
        #       in the past we have seen gaps or missing values.

        tick = MktDepthData(
            self.lastTime, position, marketMaker, operation, side, price, size
        )
        ticker.domTicks.append(tick)
        self.pendingTickers.add(ticker)
```
