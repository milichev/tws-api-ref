### Get All Executions (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves a list of all executions from the current session. An execution is the result of a fill and contains details about the trade.

```python
def executions(self) -> list[Execution]:
    """List of all executions from this session."""
    return list(fill.execution for fill in self.wrapper.fills.values())
```
