### Event Handling in ib_async

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Demonstrates how to subscribe to and handle events in ib_async, specifically for order status updates and real-time ticker updates. This involves defining callback functions and attaching them to the respective event handlers.

```python
# Subscribe to events
def onOrderUpdate(trade):
    print(f"Order update: {trade.orderStatus.status}")

ib.orderStatusEvent += onOrderUpdate

# Or with async
async def onTicker(ticker):
    print(f"Price update: {ticker.last}")

ticker.updateEvent += onTicker
```
