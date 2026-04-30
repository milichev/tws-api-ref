### Create Specialized Contracts using Contract Class

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Demonstrates how to create various financial instrument contracts using the Contract class and its specialized subclasses. This includes Stocks, Forex, Futures, Options, Bonds, and Cryptocurrencies, specifying parameters like symbol, exchange, currency, and dates.

```python
from ib_async import Contract, Stock, Forex, Future, Option, Bond, Crypto

# Example usage:
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
