### Dataclass Utility Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Common utility methods available on ib_async order classes for converting data to dictionaries, tuples, or identifying non-default fields and performing updates.

```python
# Convert to dict
data = obj.dict()

# Get non-default fields
changes = obj.nonDefaults()

# Convert to tuple
tup = obj.tuple()

# Update from other objects or kwargs
obj.update(other_obj, field=value)
```
