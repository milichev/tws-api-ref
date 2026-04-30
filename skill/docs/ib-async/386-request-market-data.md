### Request Market Data

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Subscribes to real-time market data for a specified contract. Requires a unique requestId, contract details, and tick list.

```python
client.reqMktData(reqId=1, contract=contract_object, genericTickList='', snapshot=False, regulatorySnapshot=False, mktDataOptions=None)
```
