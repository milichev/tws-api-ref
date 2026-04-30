### Define CFD Contract (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines a CFD (Contract For Difference) contract. It inherits from the base Contract class and accepts symbol, exchange, and currency as parameters.

```python
class CFD(Contract):
    def __init__(self,
        symbol: str = "",
        exchange: str = "",
        currency: str = "",
        **kwargs,
    ):
        """
        Contract For Difference.

        Args:
            symbol: Symbol name.
            exchange: Destination exchange.
            currency: Underlying currency.
        """
        Contract.__init__(
            self, "CFD", symbol=symbol, exchange=exchange, currency=currency, **kwargs
        )
```
