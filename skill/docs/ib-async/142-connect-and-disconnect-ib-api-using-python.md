### Connect and Disconnect IB API using Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

This Python snippet demonstrates how to establish a connection to the Interactive Brokers API and then disconnect. It utilizes the `IB` class and utility functions for managing the event loop and logging. Ensure the IB Gateway or TWS is running and accessible at the specified host and port.

```python
from ib_insync import *
import logging

if __name__ == "__main__":
    loop = util.getLoop()
    loop.set_debug(True)
    util.logToConsole(logging.DEBUG)
    ib = IB()
    ib.connect("127.0.0.1", 7497, clientId=1)
    ib.disconnect()
```
