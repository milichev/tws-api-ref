### Request Executions

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Retrieves execution reports based on a provided filter object. The filter contains parameters like client ID, account code, and symbol to narrow down the report results.

```python
def reqExecutions(self, reqId, execFilter):
    self.send(
        7,
        3,
        reqId,
        execFilter.clientId,
        execFilter.acctCode,
        execFilter.time,
        execFilter.symbol,
        execFilter.secType,
        execFilter.exchange,
        execFilter.side,
    )
```
