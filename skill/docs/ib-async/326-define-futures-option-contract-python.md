### Define Futures Option Contract (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines a Futures Option (FOP) contract. It includes parameters specific to options such as last trade date, strike price, right (put/call), exchange, multiplier, and currency.

```python
class FuturesOption(Contract):
    def __init__(
        self,
        symbol: str = "",
        lastTradeDateOrContractMonth: str = "",
        strike: float = 0.0,
        right: str = "",
        exchange: str = "",
        multiplier: str = "",
        currency: str = "",
        **kwargs,
    ):
        """
        Option on a futures contract.

        Args:
            symbol: Symbol name.
            lastTradeDateOrContractMonth: The option's last trading day
                or contract month.

                * YYYYMM format: To specify last month
                * YYYYMMDD format: To specify last trading day
            strike: The option's strike price.
            right: Put or call option.
                Valid values are 'P', 'PUT', 'C' or 'CALL'.
            exchange: Destination exchange.
            multiplier: The contract multiplier.
            currency: Underlying currency.
        """
        Contract.__init__(
            self,
            "FOP",
            symbol=symbol,
            lastTradeDateOrContractMonth=lastTradeDateOrContractMonth,
            strike=strike,
            right=right,
            exchange=exchange,
            multiplier=multiplier,
            currency=currency,
            **kwargs,
        )
```
