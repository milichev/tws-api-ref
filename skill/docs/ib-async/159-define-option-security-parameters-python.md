### Define Option Security Parameters (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes security definition parameters for options, including exchange, underlying contract ID, trading class, multiplier, expirations, and strikes. It creates an OptionChain object and adds it to the results for the given request ID.

```python
def securityDefinitionOptionParameter(
            self,
            reqId: int,
            exchange: str,
            underlyingConId: int,
            tradingClass: str,
            multiplier: str,
            expirations: list[str],
            strikes: list[float],
    ):
        chain = OptionChain(
            exchange, underlyingConId, tradingClass, multiplier, expirations, strikes
        )
        self._results[reqId].append(chain)
```
