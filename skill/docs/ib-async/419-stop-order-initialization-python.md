### Stop Order Initialization (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Initializes a Stop Order with a specified action, total quantity, and stop price. It inherits from the base Order class and sets the orderType to 'STP', using auxPrice for the stop price.

```python
class StopOrder(Order):
    def __init__(self, action: str, totalQuantity: float, stopPrice: float, **kwargs):
        Order.__init__(
            self,
            orderType="STP",
            action=action,
            totalQuantity=totalQuantity,
            auxPrice=stopPrice,
            **kwargs,
        )
```
