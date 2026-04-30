### Compute and Handle Option Greeks (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes tick data for option computations, including implied volatility, delta, gamma, vega, theta, and underlying price. It maps tick types to specific attributes and handles responses from volatility/price calculation requests.

```python
def tickOptionComputation(
            self,
            reqId: int,
            tickType: int,
            tickAttrib: int,
            impliedVol: float,
            delta: float,
            optPrice: float,
            pvDividend: float,
            gamma: float,
            vega: float,
            theta: float,
            undPrice: float,
    ):
        comp = OptionComputation(
            tickAttrib,
            impliedVol if impliedVol != -1 else None,
            delta if delta != -2 else None,
            optPrice if optPrice != -1 else None,
            pvDividend if pvDividend != -1 else None,
            gamma if gamma != -2 else None,
            vega if vega != -2 else vega,
            theta if theta != -2 else theta,
            undPrice if undPrice != -1 else None,
        )
        ticker = self.reqId2Ticker.get(reqId)
        if ticker:
            # reply from reqMktData
            # https://interactivebrokers.github.io/tws-api/tick_types.html

            assert tickType in GREEKS_TICK_MAP, (
                f"Received tick {tickType=} {tickAttrib=} but we don't have an attribute mapping for it? Triggered from {ticker.contract=}"
            )

            setattr(ticker, GREEKS_TICK_MAP[tickType], comp)
            self.pendingTickers.add(ticker)
        elif reqId in self._futures:
            # reply from calculateImpliedVolatility or calculateOptionPrice
            self._endReq(reqId, comp)
        else:
            self._logger.error(f"tickOptionComputation: Unknown reqId: {reqId}")
```
