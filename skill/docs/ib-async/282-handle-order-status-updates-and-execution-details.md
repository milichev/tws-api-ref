### Handle Order Status Updates and Execution Details

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

Methods for processing order status changes and execution details from the IB API. These functions update local trade objects, emit events for status transitions, and ensure synchronization between the client and the exchange.

```python
def orderStatus(self, orderId: int, status: str, filled: float, remaining: float, avgFillPrice: float, permId: int, parentId: int, lastFillPrice: float, clientId: int, whyHeld: str, mktCapPrice: float = 0.0):
	key = self.orderKey(clientId, orderId, permId)
	trade = self.trades.get(key)
	if trade:
		oldStatus = trade.orderStatus.status
		new = dict(status=status, filled=filled, remaining=remaining, avgFillPrice=avgFillPrice, permId=permId, parentId=parentId, lastFillPrice=lastFillPrice, clientId=clientId, whyHeld=whyHeld, mktCapPrice=mktCapPrice)
		dataclassUpdate(trade.orderStatus, **new)
		if status != oldStatus:
			if status == OrderStatus.Filled:
				trade.filledEvent.emit(trade)
			elif status == OrderStatus.Cancelled:
				trade.cancelledEvent.emit(trade)

def execDetails(self, reqId: int, contract: Contract, execution: Execution):
	self._logger.info(f"execDetails {execution}")
	if execution.orderId == UNSET_INTEGER:
		execution.orderId = 0
	trade = self.permId2Trade.get(execution.permId)
	if not trade:
		key = self.orderKey(execution.clientId, execution.orderId, execution.permId)
		trade = self.trades.get(key)
```
