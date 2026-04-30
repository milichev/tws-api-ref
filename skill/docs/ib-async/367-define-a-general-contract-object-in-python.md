### Define a General Contract Object in Python

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/contract.html

The `Contract` dataclass serves as a base class for all financial instruments. It can be instantiated directly with various attributes or used as a general container when a more specific type is not required. It supports numerous parameters to define a contract's properties.

```python
from ib_async.contract import Contract

# Creating a contract with specific details
contract_details = {
    "conId": 270639,
    "symbol": "IBM",
    "secType": "STK",
    "exchange": "SMART",
    "currency": "USD"
}

my_contract = Contract(**contract_details)

print(f"Contract ID: {my_contract.conId}")
print(f"Symbol: {my_contract.symbol}")
print(f"Security Type: {my_contract.secType}")
print(f"Exchange: {my_contract.exchange}")
print(f"Currency: {my_contract.currency}")
```
