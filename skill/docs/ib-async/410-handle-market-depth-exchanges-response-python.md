### Handle Market Depth Exchanges Response (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes the response containing descriptions for market depth exchanges. It utilizes a generic `_endReq` method to finalize the request, passing a string identifier 'mktDepthExchanges' and the list of `DepthMktDataDescription` objects.

```python
def mktDepthExchanges(
        self, depthMktDataDescriptions: list[DepthMktDataDescription]
    ):
        self._endReq("mktDepthExchanges", depthMktDataDescriptions)
```
