### Dataclass Conversion and Update Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section covers methods for converting dataclass instances to dictionaries and tuples, retrieving fields with non-default values, and updating dataclass objects.

```APIDOC
## Dataclass Methods

### Description
Provides methods to convert dataclass instances into dictionaries or tuples, retrieve fields that differ from their default values, and update dataclass fields.

### Methods

#### `dict()`
- **Description**: Returns dataclass values as a dictionary. This is a non-recursive variant of `dataclasses.asdict`.
- **Return Type**: `dict`

#### `nonDefaults()`
- **Description**: For a dataclass instance, gets the fields that are different from the default values and returns them as a dictionary.
- **Return Type**: `dict`[`str`, `Any`]

#### `tuple()`
- **Description**: Returns dataclass values as a tuple. This is a non-recursive variant of `dataclasses.astuple`.
- **Return Type**: `tuple`[`Any`, `...`]

#### `update(_* srcObjs_, _** kwargs_)`
- **Description**: Updates fields of the given dataclass object from zero or more dataclass source objects and/or from keyword arguments.
- **Return Type**: `object`
```
