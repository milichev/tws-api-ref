### Basic ib-async Script Usage

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Demonstrates the fundamental structure for using the ib-async library in a standard Python script. It involves initializing the IB object, connecting to the API, executing trading logic, and finally disconnecting.

```python
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)
# Your code here
ib.disconnect()
```
