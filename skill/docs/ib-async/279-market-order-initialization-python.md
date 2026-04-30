### Market Order Initialization (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Initializes a Market Order with a specified action and total quantity. It inherits from the base Order class and sets the orderType to 'MKT'.

```python
class MarketOrder(Order):
    def __init__(self, action: str, totalQuantity: float, **kwargs):
        Order.__init__(
            self,
            orderType="MKT",
            action=action,
            totalQuantity=totalQuantity,
            **kwargs,
        )
```
