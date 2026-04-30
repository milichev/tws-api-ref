### Real-time P&L Tracking

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Subscribes to real-time Profit and Loss (P&L) updates for a specified account. It defines a callback function `onPnL` to process and print these updates. The script runs indefinitely until interrupted.

```python
from ib_async import *

def onPnL(pnl):
    print(f"P&L Update: Unrealized: ${pnl.unrealizedPnL:.2f}, Realized: ${pnl.realizedPnL:.2f}")

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Subscribe to P&L updates
account = ib.managedAccounts()[0]
pnl = ib.reqPnL(account)
pnl.updateEvent += onPnL

# Keep running to receive updates
try:
    ib.run()  # Run until interrupted
except KeyboardInterrupt:
    ib.disconnect()
```
