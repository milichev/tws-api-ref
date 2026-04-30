### Create Contracts Dynamically with Contract(**kwargs)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Illustrates the flexibility of the Contract class by creating contracts using arbitrary keyword arguments. This method allows for the creation of any contract type by specifying its attributes directly.

```python
from ib_async import Contract

# Example usage:
contract_instance = Contract(_secType='STK', _symbol='AAPL', _exchange='SMART', _currency='USD')
```
