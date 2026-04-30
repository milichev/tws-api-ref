### Connect to IB TWS or Gateway

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Establishes a connection to either the Trader Workstation (TWS) or IB Gateway. Ensure TWS/Gateway is running and the API is enabled. The port number must match the running application (7497 for TWS, 4001 for Gateway). Each connection requires a unique clientId.

```python
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)  # TWS
ib.connect('127.0.0.1', 4001, clientId=1)  # Gateway
```
