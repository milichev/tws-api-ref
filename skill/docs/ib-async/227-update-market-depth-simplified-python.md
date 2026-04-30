### Update Market Depth (Simplified) (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Provides a simplified interface for updating market depth, primarily calling the more detailed `updateMktDepthL2` function. This method is useful when the `marketMaker` information is not relevant or available.

```python
def updateMktDepth(
        self,
        reqId: int,
        position: int,
        operation: int,
        side: int,
        price: float,
        size: float,
    ):
        self.updateMktDepthL2(reqId, position, "", operation, side, price, size)
```
