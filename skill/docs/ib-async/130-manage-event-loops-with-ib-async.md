### Manage Event Loops with ib-async

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Utilities for handling asyncio event loops, including support for nested loops in Jupyter and integration with Qt event loops.

```python
import ib_async.util

# Get or create an event loop
loop = ib_async.util.startLoop()

# Integrate with Qt
ib_async.util.useQt(qtLib='PyQt5', period=0.01)
```
