### Connect to Interactive Brokers TWS or Gateway

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Demonstrates how to establish a connection to the Interactive Brokers platform. It highlights the importance of using unique client IDs for multiple connections and distinguishes between TWS and Gateway port configurations.

```python
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)  # TWS
ib.connect('127.0.0.1', 4001, clientId=1)  # Gateway
print("Connected")
ib.disconnect()
```
