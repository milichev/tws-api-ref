### Request Historical Schedule Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously retrieves the historical schedule for a contract over a specified number of days. Returns an Awaitable resolving to a HistoricalSchedule object.

```python
reqHistoricalScheduleAsync(_contract_ , _numDays_ , _endDateTime =''_, _useRTH =True_)
```
