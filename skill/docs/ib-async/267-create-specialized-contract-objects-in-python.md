### Create Specialized Contract Objects in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

This function allows for the creation of specialized contract objects based on the provided security type (secType). If no secType is specified, a general Contract object is returned. It simplifies contract instantiation by mapping secType strings to corresponding contract classes.

```python
from ib_async.contract import Contract, Stock, Option, Future, Forex, CFD, Bond, Crypto

# Example usage:
stock_contract = Contract.create(secType='STK', symbol='AAPL', exchange='SMART', currency='USD')
option_contract = Contract.create(secType='OPT', symbol='SPY', lastTradeDateOrContractMonth='20231215', strike=450.0, right='C', exchange='SMART')
forex_contract = Contract.create(secType='CASH', symbol='EUR', currency='USD')

print(stock_contract)
print(option_contract)
print(forex_contract)
```
