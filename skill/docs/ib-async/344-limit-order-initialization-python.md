### Limit Order Initialization (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Initializes a Limit Order with a specified action, total quantity, and limit price. It inherits from the base Order class and sets the orderType to 'LMT'.

```python
class LimitOrder(Order):
    def __init__(self, action: str, totalQuantity: float, lmtPrice: float, **kwargs):
        Order.__init__(
            self,
            orderType="LMT",
            action=action,
            totalQuantity=totalQuantity,
            lmtPrice=lmtPrice,
            **kwargs,
        )
```
