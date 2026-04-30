### Convert Dataclass to Dictionary (ib_async.contract)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Converts dataclass instance values into a dictionary. This is a non-recursive operation, similar to `dataclasses.asdict`. It is available across multiple contract types.

```python
forex_instance.dict()
index_instance.dict()
cfd_instance.dict()
commodity_instance.dict()
bond_instance.dict()
```
