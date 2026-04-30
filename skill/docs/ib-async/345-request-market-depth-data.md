### Request Market Depth Data

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Subscribes to market depth (Level 2) data for a contract, showing bid and ask quantities at different price levels.

```python
client.reqMktDepth(reqId=1, contract=contract_object, numRows=5, isSmartDepth=False, mktDepthOptions=None)
```
