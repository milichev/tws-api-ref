### Get Account Summary Information

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Retrieves and prints the account summary details. It first gets the managed accounts and then fetches the summary for the first account. Requires an active connection.

```python
from ib_async import *

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Get account summary
account = ib.managedAccounts()[0]
summary = ib.accountSummary(account)
for item in summary:
    print(f"{item.tag}: {item.value}")

ib.disconnect()
```
