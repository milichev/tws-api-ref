### Define Financial Contract Classes

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Classes representing various financial instruments such as FuturesOption, Crypto, MutualFund, and Warrant. These classes inherit from dataclasses and provide standardized interfaces for contract attributes.

```python
from ib_async.contract import FuturesOption, Crypto, MutualFund, Warrant

# Example instantiation
option = FuturesOption(symbol='ES', strike=4000.0, right='C')
crypto = Crypto(symbol='BTC', exchange='PAXOS', currency='USD')
```
