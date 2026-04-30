### Request Executions (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests and returns a list of fills. It is recommended to use `.fills` or `.executions` instead. This method is blocking and can optionally filter executions based on provided criteria.

```python
def reqExecutions(self, execFilter: ExecutionFilter | None = None) -> list[Fill]:
        """
        It is recommended to use :meth:`.fills`  or
        :meth:`.executions` instead.

        Request and return a list of fills.

        This method is blocking.

        Args:
            execFilter: If specified, return executions that match the filter.
        """
        return self._run(self.reqExecutionsAsync(execFilter))
```
