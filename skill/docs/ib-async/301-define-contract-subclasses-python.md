### Define Contract Subclasses (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines subclasses of the Contract class for specific financial instruments like Mutual Fund, Warrant, Bag, and Crypto. Each subclass initializes the base Contract class with a specific security type.

```python
class Warrant(Contract):
    def __init__(self, **kwargs):
        """Warrant option."""
        Contract.__init__(self, "WAR", **kwargs)




[docs]
class Bag(Contract):
    def __init__(self, **kwargs):
        """Bag contract."""
        Contract.__init__(self, "BAG", **kwargs)




[docs]
class Crypto(Contract):
    def __init__(
        self, symbol: str = "", exchange: str = "", currency: str = "", **kwargs
    ):
        """
        Crypto currency contract.

        Args:
            symbol: Symbol name.
            exchange: Destination exchange.
            currency: Underlying currency.
        """
        Contract.__init__(
            self,
            secType="CRYPTO",
            symbol=symbol,
            exchange=exchange,
            currency=currency,
            **kwargs,
        )
```
