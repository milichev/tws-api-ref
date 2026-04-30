### Place a Simple Market Order

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Demonstrates how to place a market order to buy 100 shares of AAPL. It includes placing the order and monitoring its status until it's completed.

```python
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Create a contract and order
contract = Stock('AAPL', 'SMART', 'USD')
order = MarketOrder('BUY', 100)

# Place the order
trade = ib.placeOrder(contract, order)
print(f"Order placed: {trade}")

# Monitor order status
while not trade.isDone():
    ib.sleep(1)
    print(f"Order status: {trade.orderStatus.status}")

ib.disconnect()
```
