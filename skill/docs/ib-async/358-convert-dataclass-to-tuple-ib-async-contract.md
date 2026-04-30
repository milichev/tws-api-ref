### Convert Dataclass to Tuple (ib_async.contract)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Converts dataclass instance values into a tuple. This is a non-recursive operation, similar to `dataclasses.astuple`. It is available across multiple contract types.

```python
forex_instance.tuple()
index_instance.tuple()
cfd_instance.tuple()
commodity_instance.tuple()
bond_instance.tuple()
```
