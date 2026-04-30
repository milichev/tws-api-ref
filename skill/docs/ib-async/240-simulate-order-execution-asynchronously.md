### Simulate Order Execution Asynchronously

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Initiates an asynchronous 'what-if' order simulation for a given contract and order. This method creates a copy of the order to avoid modifying the original and returns an awaitable object representing the order state.

```python
def whatIfOrderAsync(
        self, contract: Contract, order: Order
    ) -> Awaitable[OrderState]:
        whatIfOrder = copy.copy(order)
        # Note: The actual implementation for sending the what-if order and awaiting its state is omitted here.
```
