### Wrapper Class for IB API Message Handling (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

The `Wrapper` class serves as an implementation for handling incoming messages from the IB API. It holds a reference to the main `IB` instance and initializes dictionaries for storing account values and summary data.

```Python
@dataclass
class Wrapper:
    """Wrapper implementation for use with the IB class."""

    # reference back to IB so wrapper can access API methods
    ib: "IB"

    accountValues: dict[tuple, AccountValue] = field(init=False)
    """ (account, tag, currency, modelCode) -> AccountValue """

    acctSummary: dict[tuple, AccountValue] = field(init=False)
```
