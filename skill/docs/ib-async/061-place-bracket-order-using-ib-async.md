### Place Bracket Order using ib_async

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Demonstrates how to place a bracket order, which includes a primary order along with a take-profit and stop-loss order. This is achieved by creating individual order objects and then placing them using the ib.placeOrder() method. The function returns a list of placed orders.

```python
from ib_async import * 

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Assume contract, parent, and stopLoss are defined elsewhere
# contract = Stock('SPY', 'SMART', 'USD')
# parent = MarketOrder('BUY', 100)
# stopLoss = StopOrder('SELL', 100, 100.00)

takeProfit = LimitOrder('SELL', 100, 260.00)
takeProfit.orderId = ib.client.getReqId()
takeProfit.parentId = parent.orderId
takeProfit.transmit = True

trades = []
trades.append(ib.placeOrder(contract, parent))
trades.append(ib.placeOrder(contract, stopLoss))
trades.append(ib.placeOrder(contract, takeProfit))

print(f"Bracket order placed: {len(trades)} orders")
ib.disconnect()
```
