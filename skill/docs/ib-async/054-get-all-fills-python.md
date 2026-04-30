### Get All Fills (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of all completed fills (executions) from the current session. A fill represents a partially or fully executed order.

```python
def fills(self) -> list[Fill]:
    """List of all fills from this session."""
    return list(self.wrapper.fills.values())
```
