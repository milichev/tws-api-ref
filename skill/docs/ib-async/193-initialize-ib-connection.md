### Initialize IB Connection

Source: https://ib-api-reloaded.github.io/ib_async/api.html

The IB class is initialized to manage the connection to TWS or IB Gateway. It supports configuration of timeouts, error handling, and timezone settings.

```python
from ib_async import IB

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Use IB.sleep(0) to allow the event loop to process pending tasks
ib.sleep(0)
```
