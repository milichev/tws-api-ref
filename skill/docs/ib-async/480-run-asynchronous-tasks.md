### Run Asynchronous Tasks

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Manages the execution of asynchronous tasks (coroutines, Tasks, Futures). It can run the event loop indefinitely, run until specified awaitables complete, or enforce a timeout. Dependencies include asyncio.

```python
import asyncio
from typing import Awaitable

# Assuming getLoop() is defined elsewhere and returns the event loop
def getLoop():
    try:
        return asyncio.get_running_loop()
    except RuntimeError:
        return asyncio.new_event_loop()

def run(*awaitables: Awaitable, timeout: float | None = None):
    """
    By default run the event loop forever.

    When awaitables (like Tasks, Futures or coroutines) are given then
    run the event loop until each has completed and return their results.

    An optional timeout (in seconds) can be given that will raise
    asyncio.TimeoutError if the awaitables are not ready within the
    timeout period.
    """
    loop = getLoop()
    if not awaitables:
        if loop.is_running():
            return

        loop.run_forever()
        result = None
        all_tasks = asyncio.all_tasks(loop)  # type: ignore

        if all_tasks:
            # cancel pending tasks
            f = asyncio.gather(*all_tasks)
            f.cancel()
            try:
                loop.run_until_complete(f)
            except asyncio.CancelledError:
                pass
    else:
        if len(awaitables) == 1:
            future = awaitables[0]
        else:
            future = asyncio.gather(*awaitables)

        if timeout:
            future = asyncio.wait_for(future, timeout)
```
