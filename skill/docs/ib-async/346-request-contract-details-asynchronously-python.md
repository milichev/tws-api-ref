### Request Contract Details Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves detailed information for a given contract asynchronously. It requires a `Contract` object and returns a future that resolves to a list of `ContractDetails`.

```python
def reqContractDetailsAsync(
    self,
    contract: Contract
) -> Awaitable[list[ContractDetails]]:
    reqId = self.client.getReqId()
    future = self.wrapper.startReq(reqId, contract)
    self.client.reqContractDetails(reqId, contract)
    return future
```
