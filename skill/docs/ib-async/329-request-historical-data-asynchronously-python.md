### Request Historical Data Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously fetches historical bar data for a contract. Supports various parameters like date/time, duration, bar size, and data type. Returns a BarDataList.

```python
_async _reqHistoricalDataAsync(_contract_ , _endDateTime_ , _durationStr_ , _barSizeSetting_ , _whatToShow_ , _useRTH_ , _formatDate =1_, _keepUpToDate =False_, _chartOptions =[]_, _timeout =60_)
```
