### Request Account Updates

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Subscribes to or unsubscribes from account updates for a specific account code. It sends a message to the server to initiate or terminate the data stream.

```python
def reqAccountUpdates(self, subscribe, acctCode):
    self.send(6, 2, subscribe, acctCode)
```
