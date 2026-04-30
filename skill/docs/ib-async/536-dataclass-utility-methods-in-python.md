### Dataclass Utility Methods in Python

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Common utility methods available on contract objects to manipulate data, including exporting to dict/tuple, filtering non-default values, and updating fields.

```python
# Convert to dict or tuple
data_dict = contract.dict()
data_tuple = contract.tuple()

# Get fields that differ from default values
changed_fields = contract.nonDefaults()

# Update contract fields from other objects or kwargs
contract.update(other_contract, symbol='NEW_SYM')
```
