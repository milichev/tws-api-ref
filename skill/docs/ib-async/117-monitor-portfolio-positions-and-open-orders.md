### Monitor Portfolio Positions and Open Orders

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Retrieves and displays the current positions held in the portfolio, including the symbol, quantity, and average cost. It also lists any currently open orders.

```python
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Get current positions
positions = ib.positions()
print("Current Positions:")
for pos in positions:
    print(f"{pos.contract.symbol}: {pos.position} @ {pos.avgCost}")

# Get open orders
orders = ib.openTrades()
print(f"\nOpen Orders: {len(orders)}")
for trade in orders:
    print(f"{trade.contract.symbol}: {trade.order.action} {trade.order.totalQuantity}")

ib.disconnect()
```
