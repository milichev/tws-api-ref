### Initialize IB Async Event System

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Demonstrates the initialization of the IB Async client, including the setup of internal events and the wrapper connection. It shows how the class structure manages event registration and client communication.

```python
import logging

class IBAsync:
    def __init__(self, defaults=None):
        self._createEvents()
        self.wrapper = Wrapper(self, defaults=defaults)
        self.client = Client(self.wrapper)
        self.errorEvent += self._onError
        self.client.apiEnd += self.disconnectedEvent
        self._logger = logging.getLogger("ib_async.ib")

    def _createEvents(self):
        self.connectedEvent = Event("connectedEvent")
        self.disconnectedEvent = Event("disconnectedEvent")
        self.updateEvent = Event("updateEvent")
```
