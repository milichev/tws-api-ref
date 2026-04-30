### Define Continuous Future Contract (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines a ContFut (Continuous Future) contract. It inherits from the base Contract class and accepts parameters like symbol, exchange, localSymbol, multiplier, and currency.

```python
class ContFuture(Contract):
    def __init__(
        self,
        symbol: str = "",
        exchange: str = "",
        localSymbol: str = "",
        multiplier: str = "",
        currency: str = "",
        **kwargs,
    ):
        """
        Continuous future contract.

        Args:
            symbol: Symbol name.
            exchange: Destination exchange.
            localSymbol: The contract's symbol within its primary exchange.
            multiplier: The contract multiplier.
            currency: Underlying currency.
        """
        Contract.__init__(
            self,
            "CONTFUT",
            symbol=symbol,
            exchange=exchange,
            localSymbol=localSymbol,
            multiplier=multiplier,
            currency=currency,
            **kwargs,
        )
```
