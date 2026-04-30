### Get Non-Default Fields as Dictionary (ib_async.contract)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves fields from a dataclass instance that differ from their default values, returning them as a dictionary. This method is useful for identifying modified fields. It is available across multiple contract types.

```python
forex_instance.nonDefaults()
index_instance.nonDefaults()
cfd_instance.nonDefaults()
commodity_instance.nonDefaults()
bond_instance.nonDefaults()
```
