### Define Commodity Contract (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines a Commodity contract. It inherits from the base Contract class and requires symbol, exchange, and currency parameters.

```python
class Commodity(Contract):
    def __init__(
        self,
        symbol: str = "",
        exchange: str = "",
        currency: str = "",
        **kwargs,
    ):
        """
        Commodity.

        Args:
            symbol: Symbol name.
            exchange: Destination exchange.
            currency: Underlying currency.
        """
        Contract.__init__(
            self, "CMDTY", symbol=symbol, exchange=exchange, currency=currency, **kwargs
        )
```
