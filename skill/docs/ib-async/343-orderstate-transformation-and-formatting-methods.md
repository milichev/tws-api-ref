### OrderState Transformation and Formatting Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Details methods for transforming and formatting OrderState objects. `transform()` applies a given transformer to numeric values. `numeric()` converts string numeric values to floats, while `formatted()` formats numeric values into strings. `dict()`, `nonDefaults()`, `tuple()`, and `update()` provide data conversion and modification capabilities similar to the Order class.

```python
transform(_transformer_)[source]
    
Convert the numeric values of this OrderState into a new OrderState transformed by ‘using’ 

numeric(_digits =2_)[source]
    
Return a new OrderState with the current values values to floats instead of strings as returned from IBKR directly. 

Return type:
    
`OrderStateNumeric` 

formatted(_digits =2_)[source]
    
Return a new OrderState with the current values as formatted strings. 

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
