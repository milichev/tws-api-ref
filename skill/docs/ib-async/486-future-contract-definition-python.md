### Future Contract Definition (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines the Future contract, inheriting from the base Contract class. It initializes a future with its symbol, expiration, exchange, and other relevant details.

```python
class Future(Contract):
    def __init__(
        self,
        symbol: str = "",
        lastTradeDateOrContractMonth: str = "",
        exchange: str = "",
        localSymbol: str = "",
        multiplier: str = "",
        currency: str = "",
        **kwargs,
    ):
        """
        Future contract.

        Args:
            symbol: Symbol name.
            lastTradeDateOrContractMonth: The option's last trading day
                or contract month.

                * YYYYMM format: To specify last month
                * YYYYMMDD format: To specify last trading day
            exchange: Destination exchange.
            localSymbol: The contract's symbol within its primary exchange.
            multiplier: The contract multiplier.
            currency: Underlying currency.
        """
        Contract.__init__(
            self,
            "FUT",
            symbol=symbol,
            lastTradeDateOrContractMonth=lastTradeDateOrContractMonth,
            exchange=exchange,
            localSymbol=localSymbol,
            multiplier=multiplier,

```
