### Perform What-If Order Analysis in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves commission and margin impact for an order without actually placing it. This method is blocking and returns an OrderState object. It's useful for pre-trade analysis to understand the financial implications of an order. It requires a contract and an order object as input.

```python
def whatIfOrder(self, contract: Contract, order: Order) -> OrderState:
        """
        Retrieve commission and margin impact without actually
        placing the order. The given order will not be modified in any way.

        This method is blocking.

        Args:
            contract: Contract to test.
            order: Order to test.
        """
        return self._run(self.whatIfOrderAsync(contract, order))
```
