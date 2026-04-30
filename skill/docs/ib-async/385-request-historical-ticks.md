### Request Historical Ticks

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves historical tick data with one-second resolution for a given contract. It supports filtering by time range, tick count, and data type (e.g., Bid_Ask, Trades).

```python
def reqHistoricalTicks(self, contract: Contract, startDateTime: str | datetime.date, endDateTime: str | datetime.date, numberOfTicks: int, whatToShow: str, useRth: bool, ignoreSize: bool = False, miscOptions: list[TagValue] = []) -> list:
	return self._run(
		self.reqHistoricalTicksAsync(contract, startDateTime, endDateTime, numberOfTicks, whatToShow, useRth, ignoreSize, miscOptions)
	)
```
