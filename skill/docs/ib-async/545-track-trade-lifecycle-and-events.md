### Track Trade Lifecycle and Events

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

The Trade class acts as a container for order details, status, and execution fills. It supports an event-driven architecture to notify listeners of status changes, fills, and commission reports.

```python
@dataclass
class Trade:
    contract: Contract = field(default_factory=Contract)
    order: Order = field(default_factory=Order)
    orderStatus: OrderStatus = field(default_factory=OrderStatus)
    fills: list[Fill] = field(default_factory=list)
    log: list[TradeLogEntry] = field(default_factory=list)
    advancedError: str = ""
```
