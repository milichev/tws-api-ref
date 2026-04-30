### Data Object: AccountValue

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Represents an account value entry containing details about account balances and currency.

```APIDOC
## Data Object: AccountValue

### Description
Represents a specific value associated with an account, such as balance or margin requirements.

### Fields
- **account** (str) - The account ID.
- **tag** (str) - The attribute tag.
- **value** (str) - The value of the attribute.
- **currency** (str) - The currency of the value.
- **modelCode** (str) - The model code associated with the account.

### Methods
- **dict()**: Returns dataclass values as a dictionary.
- **nonDefaults()**: Returns fields different from default values as a dictionary.
- **tuple()**: Returns dataclass values as a tuple.
```
