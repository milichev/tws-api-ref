### Ticker Data Serialization

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section covers methods for serializing ticker data into different formats. The `dict()` method returns the dataclass values as a dictionary, while `nonDefaults()` returns only the fields that differ from their default values. The `tuple()` method returns the values as a tuple.

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

```
