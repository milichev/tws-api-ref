### ContractDescription Class

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents a contract description with associated derivative security types.

```APIDOC
## ContractDescription Class

### Description
Represents a contract description, optionally initialized with a Contract object and a list of derivative security types.

### Attributes
- **contract** (`Contract` | `None`) - The associated Contract object.
- **derivativeSecTypes** (`list[str]`) - A list of derivative security types.

### Methods
#### dict()
Returns dataclass values as a dictionary. This is a non-recursive variant of `dataclasses.asdict`.

Return type:
    `dict`

#### nonDefaults()
For a dataclass instance, gets the fields that are different from the default values and returns them as a dictionary.

Return type:
    `dict[str, Any]`

#### tuple()
Returns dataclass values as a tuple. This is a non-recursive variant of `dataclasses.astuple`.

Return type:
    `tuple[Any, ...]`

#### update(_* srcObjs_, _** kwargs_)
Updates fields of the given dataclass object from zero or more source objects and/or keyword arguments.

Return type:
    `object`
```
