### ContractDetails Attributes and Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section details the attributes and methods available for the ContractDetails object. It includes properties like minSize, sizeIncrement, cusip, ratings, and methods such as tradingSessions(), liquidSessions(), dict(), nonDefaults(), tuple(), and update(). These are used to retrieve and manipulate detailed contract information.

```python
class ContractDetails:
    minSize: float
    sizeIncrement: float
    suggestedSizeIncrement: float
    cusip: str
    ratings: dict
    descAppend: str
    bondType: str
    couponType: str
    callable: bool
    putable: bool
    coupon: float
    convertible: bool
    maturity: str
    issueDate: str
    nextOptionDate: str
    nextOptionType: str
    nextOptionPartial: str
    notes: str

    def tradingSessions(self) -> list:
        """Returns trading sessions for the contract."""
        pass

    def liquidSessions(self) -> list:
        """Returns liquid sessions for the contract."""
        pass

    def dict(self) -> dict:
        """Returns a dictionary representation of the contract details."""
        pass

    def nonDefaults(self) -> dict:
        """Returns a dictionary of non-default attributes."""
        pass

    def tuple(self) -> tuple:
        """Returns a tuple representation of the contract details."""
        pass

    def update(self, **kwargs):
        """Updates contract details with provided keyword arguments."""
        pass
```
