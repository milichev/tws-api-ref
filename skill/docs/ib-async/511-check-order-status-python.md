### Check Order Status (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Provides methods to determine the current state of an order, such as whether it is waiting for submission, actively being worked on, or has been completed (filled or cancelled). These methods rely on the orderStatus attribute.

```python
def isWaiting(self) -> bool:
    """True if sent to IBKR but not "Submitted" for live execution yet."""
    return self.orderStatus.status in OrderStatus.WaitingStates

def isWorking(self) -> bool:
    """True if sent to IBKR but not "Submitted" for live execution yet."""
    return self.orderStatus.status in OrderStatus.WorkingStates

def isActive(self) -> bool:
    """True if eligible for execution, false otherwise."""
    return self.orderStatus.status in OrderStatus.ActiveStates

def isDone(self) -> bool:
    """True if completely filled or cancelled, false otherwise."""
    return self.orderStatus.status in OrderStatus.DoneStates
```
