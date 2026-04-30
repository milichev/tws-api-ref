### Request Positions Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Fetches current positions asynchronously. This method returns a future that will resolve with a list of `Position` objects.

```python
def reqPositionsAsync(self) -> Awaitable[list[Position]]:
    future = self.wrapper.startReq("positions")
    self.client.reqPositions()
    return future
```
