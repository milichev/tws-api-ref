### Get PnL Objects (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of PnL objects, optionally filtered by account or model code. These objects are kept live updated.

```python
def pnl(self, account: str = "", modelCode: str = "") -> list[PnL]:
    """
    List of subscribed :class:`.PnL` objects (profit and loss).

    The :class:`.PnL` objects are kept live updated.

    Args:
        account: If specified, filter for this account name.
        modelCode: If specified, filter for this account model.
    """
    return [
        v
        for v in self.wrapper.reqId2PnL.values()
        if (not account or v.account == account)
        and (not modelCode or v.modelCode == modelCode)
    ]
```
