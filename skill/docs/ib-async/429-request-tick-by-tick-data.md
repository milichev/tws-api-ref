### Request Tick-by-Tick Data

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Subscribes to granular tick-by-tick data such as 'Last', 'AllLast', 'BidAsk', or 'MidPoint'. Returns a Ticker object containing the tick stream.

```python
ticker = ib.reqTickByTickData(contract, 'Last', numberOfTicks=0)
```
