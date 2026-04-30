### Request Multi Account Updates (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests account values for multiple accounts, keeping them updated. It is recommended to use the `.accountValues` method instead. This method is blocking and allows filtering by account name or model code.

```python
def reqAccountUpdatesMulti(self, account: str = "", modelCode: str = ""):
        """
        It is recommended to use :meth:`.accountValues` instead.

        Request account values of multiple accounts and keep updated.

        This method is blocking.

        Args:
            account: If specified, filter for this account name.
            modelCode: If specified, filter for this account model.
        """
        self._run(self.reqAccountUpdatesMultiAsync(account, modelCode))
```
