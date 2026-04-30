### Request Contract Details

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Fetches detailed information for a specific financial contract. It includes conditional logic to handle server versioning for issuer ID support.

```python
def reqContractDetails(self, reqId, contract):
    fields = [
        9,
        8,
        reqId,
        contract,
        contract.includeExpired,
        contract.secType,
        contract.secId,
    ]

    if self.serverVersion() >= 176:
        fields += [contract.issuerId]

    self.send(*fields)
```
