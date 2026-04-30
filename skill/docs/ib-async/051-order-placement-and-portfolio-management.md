### Order Placement and Portfolio Management

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Covers placing simple market orders, monitoring order status, and managing complex bracket orders. Also includes snippets for retrieving current positions and open trades.

```python
# Simple Order
order = MarketOrder('BUY', 100)
trade = ib.placeOrder(Stock('AAPL', 'SMART', 'USD'), order)

# Portfolio Monitoring
positions = ib.positions()
orders = ib.openTrades()

# Real-time P&L
pnl = ib.reqPnL(account)
pnl.updateEvent += onPnL
```
