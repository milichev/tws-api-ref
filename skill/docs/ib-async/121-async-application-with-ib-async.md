### Async Application with ib-async

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Shows how to integrate ib-async into an asynchronous Python application using `asyncio`. This pattern is suitable for applications requiring non-blocking I/O operations.

```python
import asyncio
from ib_async import *

async def main():
    ib = IB()
    await ib.connectAsync('127.0.0.1', 7497, clientId=1)
    # Your async code here
    ib.disconnect()

asyncio.run(main())
```
