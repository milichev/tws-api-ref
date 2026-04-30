### Basic Connection and Disconnection

Source: https://ib-api-reloaded.github.io/ib_async/index.html

A simple example demonstrating how to establish a connection to IB TWS or Gateway and then disconnect. This is the most basic usage pattern for the library.

```python
from ib_async import *

# Connect to TWS or IB Gateway
ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)
print("Connected")

# Disconnect when done
ib.disconnect()
```
