### End Option Security Definition Parameters (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Signals the end of security definition parameters for options for a given request ID. It calls the internal method to end the request.

```python
def securityDefinitionOptionParameterEnd(self, reqId: int):
        self._endReq(reqId)
```
