### Format and Parse IB Datetime Strings

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/util.html

Utility functions to convert Python date/datetime objects into the specific string format required by the Interactive Brokers API and vice versa. Handles various input formats including UTC timestamps and timezone-aware strings.

```python
def formatIBDatetime(t: dt.date | dt.datetime | str | None) -> str:
    if not t:
        s = ""
    elif isinstance(t, dt.datetime):
        t = t.astimezone(tz=dt.timezone.utc)
        s = t.strftime("%Y%m%d %H:%M:%S UTC")
    return s

def parseIBDatetime(s: str) -> dt.date | dt.datetime:
    if len(s) == 8:
        return dt.date(int(s[0:4]), int(s[4:6]), int(s[6:8]))
    # ... additional parsing logic ...
```
