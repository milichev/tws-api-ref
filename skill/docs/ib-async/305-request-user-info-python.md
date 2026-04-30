### Request User Info - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests user information. This function is part of the IB API client and requires a request ID.

```python
def reqUserInfo(self, reqId):
        self.send(104, reqId)
```
