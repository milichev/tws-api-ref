### PriceCondition Attributes and Methods (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines a price condition for an order, including attributes like price, exchange, and trigger method. It inherits common dataclass conversion and update methods.

```Python
class PriceCondition(OrderCondition):
    condType: int = 1
    conjunction: str = 'a'
    isMore: bool = True
    price: float = 0.0
    conId: int = 0
    exch: str = ''
    triggerMethod: int = 0

    # Inherits dict(), nonDefaults(), tuple(), update()
```
