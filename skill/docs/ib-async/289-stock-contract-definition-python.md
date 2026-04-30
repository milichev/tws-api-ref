### Stock Contract Definition (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines the Stock contract, inheriting from the base Contract class. It initializes a stock with its symbol, exchange, and currency.

```python
class Stock(Contract):
    def __init__(
        self,
        symbol: str = "",
        exchange: str = "",
        currency: str = "",
        **kwargs,
    ):
        """
        Stock contract.

        Args:
            symbol: Symbol name.
            exchange: Destination exchange.
            currency: Underlying currency.
        """
        Contract.__init__(
            self,
            secType="STK",
            symbol=symbol,
            exchange=exchange,
            currency=currency,
            **kwargs,
        )
```
