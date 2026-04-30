### Get Asyncio Event Loop

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Retrieves the current asyncio event loop, providing a robust fallback mechanism. It first attempts to get the running loop, then falls back to the thread's current loop via the policy, and finally creates a new loop if necessary. This function is designed for synchronous contexts or when the loop status is uncertain.

```python
[docs]
def getLoop():
    """
    Get asyncio event loop with smart fallback handling.

    This function is designed for use in synchronous contexts or when the
    execution context is unknown. It will:
    1. Try to get the currently running event loop (if in async context)
    2. Fall back to getting the current thread's event loop via policy
    3. Create a new event loop if none exists or if the existing one is closed

    For performance-critical async code paths, prefer using
    asyncio.get_running_loop() directly instead of this function.

    Note: This function does NOT cache the loop to avoid stale loop bugs
    when loops are closed and recreated (e.g., in testing, Jupyter notebooks).
    """
    try:
        # Fast path: we're in an async context (coroutine or callback)
        loop = asyncio.get_running_loop()
        return loop
    except RuntimeError:
        pass

    # We're in a sync context or no loop is running
    # Use the event loop policy to get the loop for this thread
    # This avoids deprecation warnings from get_event_loop() in Python 3.10+
    try:
        loop = asyncio.get_event_loop_policy().get_event_loop()
    except RuntimeError:
        # No event loop exists for this thread, create one
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        return loop
```
