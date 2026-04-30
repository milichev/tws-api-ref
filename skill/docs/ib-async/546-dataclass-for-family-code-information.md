### Dataclass for Family Code Information

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/objects.html

Represents a family code, linking an account ID with its corresponding family code string. This is used for account management and grouping.

```python
from dataclasses import dataclass


[docs]
@dataclass(slots=True, frozen=True)
class FamilyCode:
    accountID: str
    familyCodeStr: str
```
