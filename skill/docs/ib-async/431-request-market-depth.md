### Request Market Depth

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Subscribes to Level 2 order book data (DOM). Returns a Ticker object populated with domBids and domAsks.

```python
ticker = ib.reqMktDepth(contract, numRows=5, isSmartDepth=True)
```
