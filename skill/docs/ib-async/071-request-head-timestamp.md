### Request Head Timestamp

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves the earliest available historical data timestamp for a specific contract. Useful for determining the start of available data history.

```python
def reqHeadTimeStamp(self, contract: Contract, whatToShow: str, useRTH: bool, formatDate: int = 1) -> datetime.datetime:
	return self._run(
		self.reqHeadTimeStampAsync(contract, whatToShow, useRTH, formatDate)
	)
```
