### Handle Smart Components Response (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes the response for smart components, typically used for routing information. This method calls a generic `_endReq` function, indicating the completion of a request identified by `reqId` and passing the received `components` data.

```python
def smartComponents(self, reqId, components):
    self._endReq(reqId, components)
```
