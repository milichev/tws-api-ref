### Request Account Summary (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests account values for all accounts and keeps them updated. It is recommended to use the `.accountSummary` method instead. This method is blocking and returns when the account summary is filled.

```python
def reqAccountSummary(self):
        """
        It is recommended to use :meth:`.accountSummary` instead.

        Request account values for all accounts and keep them updated. Returns when account summary is filled.

        This method is blocking.
        """
        self._run(self.reqAccountSummaryAsync())
```
