### Place or Modify Order in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Places a new order or modifies an existing one. It returns a Trade object that is updated with status changes and fills. If an order ID is not provided, a new one is generated. This function is central to executing trades via the API. It requires a contract and an order object.

```python
def placeOrder(self, contract: Contract, order: Order) -> Trade:
        """
        Place a new order or modify an existing order.
        Returns a Trade that is kept live updated with
        status changes, fills, etc.

        Args:
            contract: Contract to use for order.
            order: The order to be placed.
        """
        orderId = order.orderId or self.client.getReqId()
        self.client.placeOrder(orderId, contract, order)
        now = datetime.datetime.now(self.wrapper.defaultTimezone)
        key = self.wrapper.orderKey(self.wrapper.clientId, orderId, order.permId)
        trade = self.wrapper.trades.get(key)
        if trade:
            # this is a modification of an existing order
            assert trade.orderStatus.status not in OrderStatus.DoneStates
            logEntry = TradeLogEntry(now, trade.orderStatus.status, "Modify")
            trade.log.append(logEntry)
            self._logger.info(f"placeOrder: Modify order {trade}")
            trade.modifyEvent.emit(trade)
            self.orderModifyEvent.emit(trade)
        else:
            # this is a new order
            order.clientId = self.wrapper.clientId
            order.orderId = orderId
            orderStatus = OrderStatus(orderId=orderId, status=OrderStatus.PendingSubmit)
            logEntry = TradeLogEntry(now, orderStatus.status)
            trade = Trade(contract, order, orderStatus, [], [logEntry])
            self.wrapper.trades[key] = trade
            self._logger.info(f"placeOrder: New order {trade}")
            self.newOrderEvent.emit(trade)

        return trade
```
