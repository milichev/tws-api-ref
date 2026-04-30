### Configure Windows Event Loop for IBC

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

When running IBC on Windows, it is necessary to explicitly set the event loop to ProactorEventLoop to ensure compatibility with the underlying subprocess management.

```python
import asyncio
asyncio.set_event_loop(asyncio.ProactorEventLoop())
```
