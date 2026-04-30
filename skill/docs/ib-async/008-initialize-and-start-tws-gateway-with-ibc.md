### Initialize and Start TWS/Gateway with IBC

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Initializes the IBC controller with specified parameters and starts the TWS or Gateway application. Requires user credentials and trading mode. On Windows, an asyncio ProactorEventLoop must be set.

```python
import asyncio
asyncio.set_event_loop(asyncio.ProactorEventLoop())

from ib_async import IBC

ibc = IBC(976, gateway=True, tradingMode='live',
    userid='edemo', password='demouser')
ibc.start()
IB.run()
```
