### Get Single PnL Objects (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of PnLSingle objects, optionally filtered by account, model code, or contract ID. These objects represent profit and loss for single positions and are kept live updated.

```python
def pnlSingle(self, account: str = "", modelCode: str = "", conId: int = 0) -> list[PnLSingle]:
    """
    List of subscribed :class:`.PnLSingle` objects (profit and loss for
    single positions).

    The :class:`.PnLSingle` objects are kept live updated.

    Args:
        account: If specified, filter for this account name.
        modelCode: If specified, filter for this account model.
        conId: If specified, filter for this contract ID.
    """
    return [
        v
        for v in self.wrapper.reqId2PnlSingle.values()
        if (not account or v.account == account)
        and (not modelCode or v.modelCode == modelCode)
        and (not conId or v.conId == conId)
    ]
```
