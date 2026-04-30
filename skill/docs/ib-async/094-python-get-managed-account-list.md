### Python: Get Managed Account List

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Retrieves the list of account names currently managed by the client. It requires an active connection to the IB API and returns a list of strings, where each string is an account name.

```python
def getAccounts(self) -> list[str]:
        """Get the list of account names that are under management."""
        if not self.isReady():
            raise ConnectionError("Not connected")
        return self._accounts
```
