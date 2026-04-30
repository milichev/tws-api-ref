### Request Matching Symbols Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Asynchronously searches for contract symbols matching a given pattern. It includes a timeout mechanism and returns a list of `ContractDescription` objects or `None` if a timeout occurs.

```python
async def reqMatchingSymbolsAsync(
    self,
    pattern: str
) -> list[ContractDescription] | None:
    reqId = self.client.getReqId()
    future = self.wrapper.startReq(reqId)
    self.client.reqMatchingSymbols(reqId, pattern)
    try:
        await asyncio.wait_for(future, 4)
        return future.result()
    except asyncio.TimeoutError:
        self._logger.error("reqMatchingSymbolsAsync: Timeout")
        return None
```
