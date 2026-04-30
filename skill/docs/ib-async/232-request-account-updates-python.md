### Request Account Updates (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests account and portfolio values, keeping them updated. This method is blocking and is typically called at startup. It can optionally filter for a specific account.

```python
def reqAccountUpdates(self, account: str = ""):
        """
        This is called at startup - no need to call again.

        Request account and portfolio values of the account
        and keep updated. Returns when both account values and portfolio
        are filled.

        This method is blocking.

        Args:
            account: If specified, filter for this account name.
        """
        self._run(self.reqAccountUpdatesAsync(account))
```
