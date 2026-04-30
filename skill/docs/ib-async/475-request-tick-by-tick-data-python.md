### Request Tick-by-Tick Data - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests tick-by-tick data for a given contract. This function is part of the IB API client and requires a request ID, contract, tick type, number of ticks, and ignore size flag.

```python
def reqTickByTickData(self, reqId, contract, tickType, numberOfTicks, ignoreSize):
        self.send(97, reqId, contract, tickType, numberOfTicks, ignoreSize)
```
