### Request Head Timestamp Data - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests head timestamp data for a given contract. This function is part of the IB API client. It takes a request ID, contract object, show type, use real-time data flag, and date format as input.

```python
def reqHeadTimeStamp(self, reqId, contract, whatToShow, useRTH, formatDate):
        self.send(
            87, reqId, contract, contract.includeExpired, useRTH, whatToShow, formatDate
        )
```
