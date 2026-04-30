### Manage Open Orders

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Processes open order events, including initial startup feeds and real-time order updates. It distinguishes between 'what-if' orders and standard trade management.

```python
def openOrder(self, orderId, contract, order, orderState):
    if order.whatIf:
        if float(orderState.initMarginChange) != UNSET_DOUBLE:
            self._endReq(order.orderId, orderState)
    else:
        key = self.orderKey(order.clientId, order.orderId, order.permId)
        trade = self.trades.get(key)
        if trade:
            trade.order.permId = order.permId
            trade.order.totalQuantity = order.totalQuantity
            trade.order.lmtPrice = order.lmtPrice
            trade.order.auxPrice = order.auxPrice
```
