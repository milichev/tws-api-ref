### Request Market Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Subscribes to real-time market data or requests a snapshot for a contract. Returns a Ticker object that updates as data arrives.

```python
def reqMktData(self, contract: Contract, genericTickList: str = "", snapshot: bool = False, regulatorySnapshot: bool = False, mktDataOptions: list[TagValue] = []) -> Ticker:
	return self._run(
		self.reqMktDataAsync(contract, genericTickList, snapshot, regulatorySnapshot, mktDataOptions)
	)
```
