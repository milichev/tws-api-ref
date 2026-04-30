### Create Advanced Bracket Order

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Illustrates the creation of a bracket order, which includes a parent order (limit buy) and associated child orders for stop-loss and take-profit. The `transmit` flag is set to `False` for parent and child orders, indicating they are not sent immediately.

```python
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Create a bracket order (entry + stop loss + take profit)
contract = Stock('TSLA', 'SMART', 'USD')

# Parent order
parent = LimitOrder('BUY', 100, 250.00)
parent.orderId = ib.client.getReqId()
parent.transmit = False

# Stop loss
stopLoss = StopOrder('SELL', 100, 240.00)
stopLoss.orderId = ib.client.getReqId()
stopLoss.parentId = parent.orderId
stopLoss.transmit = False

# Take profit (example - not fully shown in snippet)
```
