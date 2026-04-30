### Define Index Contract (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines an Index contract. It inherits from the base Contract class and requires parameters such as symbol, exchange, and currency.

```python
class Index(Contract):
    def __init__(self, symbol: str = "", exchange: str = "", currency: str = "", **kwargs):
        """
        Index.

        Args:
            symbol: Symbol name.
            exchange: Destination exchange.
            currency: Underlying currency.
        """
        Contract.__init__(
            self, "IND", symbol=symbol, exchange=exchange, currency=currency, **kwargs
        )
```
