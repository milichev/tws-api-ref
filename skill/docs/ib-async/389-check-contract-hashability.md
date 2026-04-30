### Check Contract Hashability

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Demonstrates the `isHashable` method, which checks if a contract can be hashed by its `conId`. This is important for using contracts in sets or as dictionary keys. Note that Bag contracts have special handling.

```python
from ib_async import Contract

# Example usage:
stock_contract = Contract(conId=12345, _secType='STK')
print(stock_contract.isHashable()) # Output: True

# Bag contracts might return False or handle hashing differently
bag_contract = Contract(conId=28812380, _secType='BAG') # Example conId for Bag
print(bag_contract.isHashable()) # Output: False (or depends on internal logic)
```
