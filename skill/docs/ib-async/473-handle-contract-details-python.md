### Handle Contract Details (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Stores contract details received for a given request ID. This function is also aliased as bondContractDetails. It appends the received ContractDetails object to the results list associated with the request ID.

```python
def contractDetails(self, reqId: int, contractDetails: ContractDetails):
        self._results[reqId].append(contractDetails)

bondContractDetails = contractDetails
```
