### Dataclass Utility Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Common utility methods available on ib_async dataclass objects to retrieve data as dictionaries, tuples, or filtered non-default values.

```APIDOC
## Method: nonDefaults()

### Description
Returns a dictionary containing only the fields of the dataclass instance that differ from their default values.

### Response
- **Returns** (dict[str, Any]) - A dictionary of modified fields.

---

## Method: dict()

### Description
Returns the dataclass values as a dictionary. This is a non-recursive variant of `dataclasses.asdict`.

### Response
- **Returns** (dict) - The object representation as a dictionary.

---

## Method: tuple()

### Description
Returns the dataclass values as a tuple. This is a non-recursive variant of `dataclasses.astuple`.

### Response
- **Returns** (tuple) - The object representation as a tuple.

---

## Method: update(*srcObjs, **kwargs)

### Description
Updates the fields of the current dataclass object using values from provided source objects or keyword arguments.

### Parameters
- **srcObjs** (list) - Optional - Zero or more dataclass objects to pull values from.
- **kwargs** (dict) - Optional - Key-value pairs to update specific fields.

### Response
- **Returns** (object) - The updated dataclass instance.
```
