### Manage News Bulletins

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Functions to subscribe to and cancel IB news bulletins. These methods interact directly with the client to control the flow of incoming news messages.

```python
def reqNewsBulletins(self, allMessages: bool):
    self.client.reqNewsBulletins(allMessages)

def cancelNewsBulletins(self):
    self.client.cancelNewsBulletins()
```
