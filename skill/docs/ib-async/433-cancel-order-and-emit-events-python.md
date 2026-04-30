### Cancel Order and Emit Events (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Handles the cancellation of an order, updates its status, logs the event, and emits various trade-related events. It logs an error if the orderId is unknown. This function returns the trade object.

```python
newStatus = OrderStatus.Cancelled
                else:
                    newStatus = OrderStatus.PendingCancel

                logEntry = TradeLogEntry(now, newStatus)
                trade.log.append(logEntry)
                trade.orderStatus.status = newStatus
                self._logger.info(f"cancelOrder: {trade}")
                trade.cancelEvent.emit(trade)
                trade.statusEvent.emit(trade)
                self.cancelOrderEvent.emit(trade)
                self.orderStatusEvent.emit(trade)
                if newStatus == OrderStatus.Cancelled:
                    trade.cancelledEvent.emit(trade)
        else:
            self._logger.error(f"cancelOrder: Unknown orderId {order.orderId}")

        return trade
```
