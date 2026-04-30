### Process Scanner Parameters (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Handles the XML string containing scanner parameters. It calls an internal method to end the request with the provided XML data.

```python
def scannerParameters(self, xml: str):
        self._endReq("scannerParams", xml)
```
