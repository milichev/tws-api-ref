### Subscribe to Live Market Data

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Subscribes to real-time market data for a given stock contract (AAPL). It then prints the last traded price, bid, and ask for 30 seconds. Requires an active connection and potentially a market data subscription.

```python
from ib_async import *
import time

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Subscribe to live market data
contract = Stock('AAPL', 'SMART', 'USD')
ticker = ib.reqMktData(contract, '', False, False)

# Print live quotes for 30 seconds
for i in range(30):
    ib.sleep(1)  # Wait 1 second
    if ticker.last:
        print(f"AAPL: ${ticker.last} (bid: ${ticker.bid}, ask: ${ticker.ask})")

ib.disconnect()
```
