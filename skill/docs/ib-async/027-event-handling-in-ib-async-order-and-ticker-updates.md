### Event Handling in ib_async (Order and Ticker Updates)

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Demonstrates how to subscribe to and handle events in `ib_async`. This includes setting up callback functions for order status updates and real-time ticker data. The examples show both standard function callbacks and asynchronous event handlers.

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
