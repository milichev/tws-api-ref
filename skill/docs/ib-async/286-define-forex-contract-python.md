### Define Forex Contract (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Defines a Forex (Foreign Exchange) contract. It allows specifying a currency pair directly or by providing base and quote currencies. It includes a method to retrieve the pair string.

```python
class Forex(Contract):
    def __init__(
        self,
        pair: str = "",
        exchange: str = "IDEALPRO",
        symbol: str = "",
        currency: str = "",
        **kwargs,
    ):
        """
        Foreign exchange currency pair.

        Args:
            pair: Shortcut for specifying symbol and currency, like 'EURUSD'.
            exchange: Destination exchange.
            symbol: Base currency.
            currency: Quote currency.
        """
        if pair:
            assert len(pair) == 6
            symbol = symbol or pair[:3]
            currency = currency or pair[3:]

        Contract.__init__(
            self, "CASH", symbol=symbol, exchange=exchange, currency=currency, **kwargs
        )

    def __repr__(self):
        attrs = util.dataclassNonDefaults(self)
        attrs.pop("secType")
        s = "Forex("
        if "symbol" in attrs and "currency" in attrs:
            pair = attrs.pop("symbol")
            pair += attrs.pop("currency")
            s += "'" + pair + "'" + (", " if attrs else "")
        s += ", ".join(f"{k}={v!r}" for k, v in attrs.items())
        s += ")"
        return s

    __str__ = __repr__



    def pair(self) -> str:
        """Short name of pair."""
        return self.symbol + self.currency
```
