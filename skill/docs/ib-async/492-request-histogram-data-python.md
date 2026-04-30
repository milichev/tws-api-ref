### Request Histogram Data - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Initiates a request for histogram data. This function is used with the IB API client and requires a ticker ID, contract, real-time data flag, and time period.

```python
def reqHistogramData(self, tickerId, contract, useRTH, timePeriod):
        self.send(88, tickerId, contract, contract.includeExpired, useRTH, timePeriod)
```
