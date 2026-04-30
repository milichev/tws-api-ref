### Request Market Data

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Subscribes to real-time tick data or requests a one-time snapshot for a specific contract. Returns a Ticker object that is populated asynchronously.

```python
ticker = ib.reqMktData(contract, genericTickList='100,101', snapshot=False)
ib.sleep(2)
print(ticker.marketPrice())
```
