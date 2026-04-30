### Request Current Time Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Fetches the current server time asynchronously. This method does not require specific parameters beyond initiating the request and returns a future that will resolve with the current datetime.

```python
def reqCurrentTimeAsync(self) -> Awaitable[datetime.datetime]:
    future = self.wrapper.startReq("currentTime")
    self.client.reqCurrentTime()
    return future
```
