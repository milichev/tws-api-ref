### Get Account Summary Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves account summary data asynchronously. If the data is not already loaded, it first calls `reqAccountSummaryAsync`. It can filter results by a specific account or return all summary values.

```python
async def accountSummaryAsync(self, account: str = "") -> list[AccountValue]:
    if not self.wrapper.acctSummary:
        # loaded on demand since it takes ca. 250 ms
        await self.reqAccountSummaryAsync()

    if account:
        return [
            v for v in self.wrapper.acctSummary.values() if v.account == account
        ]

    return list(self.wrapper.acctSummary.values())
```
