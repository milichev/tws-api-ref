### Update Dataclass Fields (ib_async.contract)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Updates fields of a dataclass object using one or more source dataclass objects and/or keyword arguments. This method allows for flexible modification of contract details. It is available across multiple contract types.

```python
forex_instance.update(other_forex_instance, new_field='value')
index_instance.update(other_index_instance, new_field='value')
cfd_instance.update(other_cfd_instance, new_field='value')
commodity_instance.update(other_commodity_instance, new_field='value')
bond_instance.update(other_bond_instance, new_field='value')
```
