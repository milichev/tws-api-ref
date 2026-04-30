### Dataclass Utility Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Common utility methods implemented across contract classes to facilitate data transformation and state management. Includes methods for dictionary/tuple conversion, retrieving non-default fields, and bulk updating attributes.

```python
contract = FuturesOption(symbol='ES')

# Convert to dict
data = contract.dict()

# Get only modified fields
changes = contract.nonDefaults()

# Update from another object or kwargs
contract.update(exchange='GLOBEX')
```
