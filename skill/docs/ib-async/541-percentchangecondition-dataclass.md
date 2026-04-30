### PercentChangeCondition Dataclass

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Defines the PercentChangeCondition dataclass with its fields and associated methods.

```APIDOC
## `ib_async.order.PercentChangeCondition`

### Description
Represents a condition based on percentage change, used in order management.

### Fields

- **condType** (`int`) - Default: 7 - The type of condition.
- **conjunction** (`str`) - Default: 'a' - The conjunction used for the condition.
- **isMore** (`bool`) - Default: True - Specifies if the condition is 'greater than'.
- **changePercent** (`float`) - Default: 0.0 - The percentage change threshold.
- **conId** (`int`) - Default: 0 - The contract identifier.
- **exch** (`str`) - Default: '' - The exchange identifier.

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
