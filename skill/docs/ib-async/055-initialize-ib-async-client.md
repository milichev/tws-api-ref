### Initialize IB Async Client

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Instantiates the IB Async Client, replacing the standard EClient. It allows configuration of request throttling and client version compatibility.

```python
from ib_async import client

client = client.Client(wrapper=None, MaxRequests=45, RequestsInterval=1, MinClientVersion=157, MaxClientVersion=178)
```
