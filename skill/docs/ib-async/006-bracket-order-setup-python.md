### Bracket Order Setup (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates the setup for a bracket order. This typically involves specifying the action (buy/sell), quantity, and potentially other parameters for the primary order and its associated stop-limit and take-profit orders.

```python
def bracketOrder(
    self,
    action: str,
    quantity: float,

```
