### PnLSingle Object

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents single PnL (Profit and Loss) data for an account, model, or contract.

```APIDOC
## PnLSingle Object

### Description
Represents single PnL (Profit and Loss) data for an account, model, or contract.

### Class Definition
`ib_async.objects.PnLSingle(account='', modelCode='', conId=0, dailyPnL=nan, unrealizedPnL=nan, realizedPnL=nan, position=0, value=nan)`

### Fields
- **account** (`str`, optional) - The account identifier. Defaults to ''.
- **modelCode** (`str`, optional) - The model code. Defaults to ''.
- **conId** (`int`, optional) - The contract identifier. Defaults to 0.
- **dailyPnL** (`float`, optional) - The daily PnL. Defaults to `nan`.
- **unrealizedPnL** (`float`, optional) - The unrealized PnL. Defaults to `nan`.
- **realizedPnL** (`float`, optional) - The realized PnL. Defaults to `nan`.
- **position** (`int`, optional) - The current position. Defaults to 0.
- **value** (`float`, optional) - The value of the position. Defaults to `nan`.

### Methods
#### `dict()`
Returns the dataclass values as a dictionary. This is a non-recursive variant of `dataclasses.asdict`.

#### `nonDefaults()`
Returns fields that differ from their default values as a dictionary.

#### `tuple()`
Returns the dataclass values as a tuple. This is a non-recursive variant of `dataclasses.astuple`.

#### `update(*srcObjs, **kwargs)`
Updates fields of the dataclass object from source objects or keyword arguments.
```
