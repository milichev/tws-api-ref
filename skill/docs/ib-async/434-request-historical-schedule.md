### Request Historical Schedule

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests the trading schedule for a specific contract over a defined number of days. This is a blocking method that returns a HistoricalSchedule object.

```python
def reqHistoricalSchedule(self, contract: Contract, numDays: int, endDateTime: datetime.datetime | datetime.date | str | None = "", useRTH: bool = True) -> HistoricalSchedule:
	return self._run(
		self.reqHistoricalScheduleAsync(contract, numDays, endDateTime, useRTH)
	)
```
