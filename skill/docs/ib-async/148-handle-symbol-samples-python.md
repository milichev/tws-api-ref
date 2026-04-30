### Handle Symbol Samples (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes symbol samples, which are a list of ContractDescription objects. It ends the request by passing the received contractDescriptions. This is used for retrieving sample contracts based on a symbol.

```python
def symbolSamples(
        self, reqId: int, contractDescriptions: list[ContractDescription]
    ):
        self._endReq(reqId, contractDescriptions)
```
