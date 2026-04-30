### Create or Recreate Contract Objects

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Shows how to use static methods `_create` and `_recreate` of the Contract class. `_create` generates a specialized contract based on provided arguments, while `_recreate` converts a generic Contract object into its most specific type.

```python
from ib_async import Contract

# Example usage of _create:
specialized_contract = Contract._create(_secType='STK', _symbol='MSFT', _exchange='NASDAQ', _currency='USD')

# Example usage of _recreate (assuming 'generic_contract' is a Contract object):
# specific_contract = Contract._recreate(generic_contract)
```
