### Create Bracket Order in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Creates a bracket order consisting of a parent limit order and two child orders for take-profit and stop-loss. This function is useful for managing risk and profit targets simultaneously. It requires action, quantity, limit price, take-profit price, and stop-loss price as input.

```python
def createBracketOrder(
        self,
        action: str,
        quantity: int,
        limitPrice: float,
        takeProfitPrice: float,
        stopLossPrice: float,
        **kwargs,
    ) -> BracketOrder:
        """
        Create a limit order that is bracketed by a take-profit order and
        a stop-loss order. Submit the bracket like:

        .. code-block:: python

            for o in bracket:
                ib.placeOrder(contract, o)

        https://interactivebrokers.github.io/tws-api/bracket_order.html

        Args:
            action: 'BUY' or 'SELL'.
            quantity: Size of order.
            limitPrice: Limit price of entry order.
            takeProfitPrice: Limit price of profit order.
            stopLossPrice: Stop price of loss order.
        """
        assert action in ("BUY", "SELL")
        reverseAction = "BUY" if action == "SELL" else "SELL"
        parent = LimitOrder(
            action,
            quantity,
            limitPrice,
            orderId=self.client.getReqId(),
            transmit=False,
            **kwargs,
        )
        takeProfit = LimitOrder(
            reverseAction,
            quantity,
            takeProfitPrice,
            orderId=self.client.getReqId(),
            transmit=False,
            parentId=parent.orderId,
            **kwargs,
        )
        stopLoss = StopOrder(
            reverseAction,
            quantity,
            stopLossPrice,
            orderId=self.client.getReqId(),
            transmit=True,
            parentId=parent.orderId,
            **kwargs,
        )

        return BracketOrder(parent, takeProfit, stopLoss)
```
