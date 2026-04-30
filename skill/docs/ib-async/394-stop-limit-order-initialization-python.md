### Stop Limit Order Initialization (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Initializes a Stop Limit Order with action, total quantity, limit price, and stop price. It inherits from the base Order class and sets the orderType to 'STP LMT', using auxPrice for the stop price.

```python
class StopLimitOrder(Order):
    def __init__(
        self,
        action: str,
        totalQuantity: float,
        lmtPrice: float,
        stopPrice: float,
        **kwargs,
    ):
        Order.__init__(
            self,
            orderType="STP LMT",
            action=action,
            totalQuantity=totalQuantity,
            lmtPrice=lmtPrice,
            auxPrice=stopPrice,
            **kwargs,
        )
```
