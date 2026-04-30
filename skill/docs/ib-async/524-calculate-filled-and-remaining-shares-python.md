### Calculate Filled and Remaining Shares (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/order.html

Calculates the total number of shares that have been filled for an order and the remaining quantity to be filled. It handles special cases for 'BAG' security types and accounts for fills on leg contracts.

```python
def filled(self) -> float:
    """Number of shares filled."""
    fills = self.fills
    if self.contract.secType == "BAG":
        # don't count fills for the leg contracts
        fills = [f for f in fills if f.contract.secType == "BAG"]

    return sum([f.execution.shares for f in fills])

def remaining(self) -> float:
    """Number of shares remaining to be filled."""
    return float(self.order.totalQuantity) - self.filled()
```
