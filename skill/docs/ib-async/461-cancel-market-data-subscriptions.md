### Cancel Market Data Subscriptions

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Methods to unsubscribe from previously requested market data streams, including standard tick data, tick-by-tick data, and market depth.

```python
ib.cancelMktData(contract)
ib.cancelTickByTickData(contract, 'Last')
ib.cancelMktDepth(contract, isSmartDepth=True)
```
