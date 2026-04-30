### Ticker Data Storage and Access

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section explains how the Ticker class stores different types of streaming market data. Level-1 ticks are in `ticks`, level-2 ticks (order book) are in `domTicks`, `domBids`, and `domAsks`. Tick-by-tick data is in `tickByTicks`. Option Greeks are stored in `bidGreeks`, `askGreeks`, `lastGreeks`, and `modelGreeks`.

```python
Streaming level-1 ticks of type `TickData` are stored in the `ticks` list.
Streaming level-2 ticks of type `MktDepthData` are stored in the `domTicks` list. The order book (DOM) is available as lists of `DOMLevel` in `domBids` and `domAsks`.
Streaming tick-by-tick ticks are stored in `tickByTicks`.
For options the `OptionComputation` values for the bid, ask, resp. last price are stored in the `bidGreeks`, `askGreeks` resp. `lastGreeks` attributes. There is also `modelGreeks` that conveys the greeks as calculated by Interactive Brokers’ option model.
```
