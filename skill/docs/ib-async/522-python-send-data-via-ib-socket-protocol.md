### Python: Send Data via IB Socket Protocol

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Serializes and sends data fields using the IB socket protocol. It handles the conversion of various data types, including Contracts and floats, to their string representations suitable for the IB API. Optionally converts 'unset' values to empty strings.

```python
def send(self, *fields, makeEmpty=True):
        """Serialize and send the given fields using the IB socket protocol.

        if 'makeEmpty' is True (default), then the IBKR values representing "no value"
        become the empty string."""
        if not self.isConnected():
            raise ConnectionError("Not connected")

        # fmt: off
        FORMAT_HANDLERS: dict[Any, Callable[[Any], str]] = {
            # Contracts are formatted in IBKR null delimiter format
            Contract: lambda c: "\0".join([
                str(f)
                for f in (
                    c.conId,
                    c.symbol,
                    c.secType,
                    c.lastTradeDateOrContractMonth,
                    c.strike,
                    c.right,
                    c.multiplier,
                    c.exchange,
                    c.primaryExchange,
                    c.currency,
                    c.localSymbol,
                    c.tradingClass,
                )
            ]),

            # Float conversion has 3 stages:
            #  - Convert 'IBKR unset' double to empty (if requested)
            #  - Convert infinity to 'Infinite' string (if appropriate)
            #  - else, convert float to string normally
            float: lambda f: "" 
            if (makeEmpty and f == UNSET_DOUBLE)
            else ("Infinite" if (f == math.inf) else str(f)),

            # Int conversion has 2 stages:
            #  - Convert 'IBKR unset' to empty (if requested)

```
