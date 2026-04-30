### Place Order Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates an order placement request asynchronously. It requires a contract, order details, and returns a future object representing the pending result. The `whatIf` parameter controls whether the order is a simulated 'what-if' order.

```python
whatIfOrder.whatIf = True
reqId = self.client.getReqId()
future = self.wrapper.startReq(reqId, contract)
self.client.placeOrder(reqId, contract, whatIfOrder)
return future
```
