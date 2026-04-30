### Order Class Utility Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Provides utility methods for the Order class, including `dict()` to return dataclass values as a dictionary, `nonDefaults()` to return fields that differ from their default values as a dictionary, and `tuple()` to return dataclass values as a tuple. The `update()` method allows modifying the object's fields from source objects or keyword arguments.

```python
dict()
    
Return dataclass values as `dict`. This is a non-recursive variant of `dataclasses.asdict`.

Return type:
    
`dict` 

nonDefaults()
    
For a `dataclass` instance get the fields that are different from the default values and return as `dict`. 

Return type:
    
`dict`[`str`, `Any`] 

tuple()
    
Return dataclass values as `tuple`. This is a non-recursive variant of `dataclasses.astuple`.

Return type:
    
`tuple`[`Any`, `...`] 

update(_* srcObjs_, _** kwargs_)
    
Update fields of the given `dataclass` object from zero or more `dataclass` source objects and/or from keyword arguments. 

Return type:
    
`object`
```
