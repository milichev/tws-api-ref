[IBKR TWS API](../../SKILL.md) · [ib_async Reference](index.md) · [Contract Module](04-contract.md)


# Contract Module

### Example Contract Instantiations

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Illustrates various ways to create contract objects using keyword arguments or specialized constructors. Examples cover stocks, forex, options, futures, and bonds, demonstrating the flexibility in defining contract details.

```python
Contract(conId=270639)
Stock('AMD', 'SMART', 'USD')
Stock('INTC', 'SMART', 'USD', primaryExchange='NASDAQ')
Forex('EURUSD')
CFD('IBUS30')
Future('ES', '20180921', 'GLOBEX')
Option('SPY', '20170721', 240, 'C', 'SMART')
Bond(secIdType='ISIN', secId='US03076KAA60')
Crypto('BTC', 'PAXOS', 'USD')
```

---

### TradingSession NamedTuple

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Represents a trading session with start and end datetimes.

```python
class TradingSession(NamedTuple):
    start: dt.datetime
    end: dt.datetime
```

---

### Get Forex Pair Name - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Returns the combined symbol and currency as the currency pair name.

```python
    def pair(self) -> str:
        """Short name of pair."""
        return self.symbol + self.currency
```

---

### Initialize Index Contract - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Represents an index contract. Requires symbol, exchange, and currency.

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

---

### Initialize Commodity Contract - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Represents a commodity contract. Requires symbol, exchange, and currency.

```python
class Commodity(Contract):
    def __init__(self, symbol: str = "", exchange: str = "", currency: str = "", **kwargs):
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

---

### Initialize CFD Contract - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Represents a Contract For Difference (CFD). Requires symbol, exchange, and currency.

```python
class CFD(Contract):
    def __init__(self, symbol: str = "", exchange: str = "", currency: str = "", **kwargs):
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

---

### Initialize Forex Contract - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Represents a foreign exchange currency pair. Can be initialized with a 'pair' string (e.g., 'EURUSD') or individual symbol and currency. Defaults to IDEALPRO exchange.

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
```

---

### Initialize CRYPTO Contract

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Initializes a Crypto currency contract. Requires symbol, exchange, and currency. Inherits from the base Contract class.

```python
def __init__(self,
        symbol: str = "", exchange: str = "", currency: str = "", **kwargs
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

---

### Initialize FUND Contract

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Initializes a FUND contract. Inherits from the base Contract class.

```python
def __init__(self, **kwargs):
    """Mutual fund."""
    Contract.__init__(self, "FUND", **kwargs)
```

---

### Stock Contract Initialization

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Initializes a Stock contract with symbol, exchange, and currency. Inherits from the base Contract class.

```python
Stock(
            symbol='IBM',
            exchange='SMART',
            currency='USD'
        )
```

---

### Create Specialized Contract Instance

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Use the `create` static method to instantiate a specialized contract object based on the provided `secType`. If `secType` is not specified, a general `Contract` object is returned. This method acts as a factory for various contract types like Stock, Option, Future, etc.

```python
secType = kwargs.get("secType", "")
cls = {
    "": Contract,
    "STK": Stock,
    "OPT": Option,
    "FUT": Future,
    "CONTFUT": ContFuture,
    "CASH": Forex,
    "IND": Index,
    "CFD": CFD,
    "BOND": Bond,
    "CMDTY": Commodity,
    "FOP": FuturesOption,
    "FUND": MutualFund,
    "WAR": Warrant,
    "IOPT": Warrant,
    "BAG": Bag,
    "CRYPTO": Crypto,
```

---

### Initialize Continuous Future Contract - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Used to represent a continuous future contract. Requires symbol, exchange, and currency among other parameters.

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

---

### Initialize Warrant Contract

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Initializes a Warrant contract. Inherits from the base Contract class.

```python
def __init__(self, **kwargs):
    """Warrant option."""
    Contract.__init__(self, "WAR", **kwargs)
```

---

### Create Contract Instance

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Factory method to create a contract instance based on its security type. Handles specific contract types and their arguments.

```python
Contract.create(
            secType='STK',
            symbol='IBM',
            exchange='SMART',
            currency='USD'
        )
```

---

### Initialize BAG Contract

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Initializes a BAG contract. Inherits from the base Contract class.

```python
def __init__(self, **kwargs):
    """Bag contract."""
    Contract.__init__(self, "BAG", **kwargs)
```

---

### Initialize Bond Contract - Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Represents a bond contract. Initializes with default 'BOND' secType and accepts other parameters via kwargs.

```python
class Bond(Contract):
    def __init__(self, **kwargs):
        """Bond."""
        Contract.__init__(self, "BOND", **kwargs)
```

---

### Recreate Contract from Existing

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Static method to recreate a generic Contract into its most specific type. Useful for converting existing contract objects.

```python
Contract.recreate(c)
```

---

### Parse Liquid Sessions from ContractDetails

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Parses the liquid hours string from ContractDetails into a list of TradingSession objects. Requires timeZoneId to be set.

```python
def liquidSessions(self) -> list[TradingSession]:
    return self._parseSessions(self.liquidHours)
```

---

### Contract Base Classes

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Base classes for different contract types.

```APIDOC
## Contract Base Classes

### Fund Contract
```python
class Fund(Contract):
    def __init__(self, **kwargs):
        """Mutual fund."""
        Contract.__init__(self, "FUND", **kwargs)
```

### Warrant Contract
```python
class Warrant(Contract):
    def __init__(self, **kwargs):
        """Warrant option."""
        Contract.__init__(self, "WAR", **kwargs)
```

### Bag Contract
```python
class Bag(Contract):
    def __init__(self, **kwargs):
        """Bag contract."""
        Contract.__init__(self, "BAG", **kwargs)
```

### Crypto Contract
```python
class Crypto(Contract):
    def __init__(self,
        symbol: str = "", exchange: str = "", currency: str = "", **kwargs
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
```

---

### Parse Trading Sessions from ContractDetails

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

Parses the trading hours string from ContractDetails into a list of TradingSession objects. Requires timeZoneId to be set.

```python
def tradingSessions(self) -> list[TradingSession]:
    return self._parseSessions(self.tradingHours)
```
