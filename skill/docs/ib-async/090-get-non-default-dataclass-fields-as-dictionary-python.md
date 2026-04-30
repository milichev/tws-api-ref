### Get Non-Default Dataclass Fields as Dictionary (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves fields from a dataclass instance that have values different from their default settings, returning them as a dictionary. This is useful for identifying changes or sending only modified data.

```python
from ib_async.objects import TradeLogEntry

entry = TradeLogEntry(time='2023-10-27', status='Filled', message='Order executed', errorCode=100)
non_defaults = entry.nonDefaults()
print(non_defaults)
```

```python
from ib_async.objects import PnLSingle

pnl_data = PnLSingle(account='DU12345', realizedPnL=100.50, unrealizedPnL=50.25)
non_defaults = pnl_data.nonDefaults()
print(non_defaults)
```

```python
from ib_async.objects import HistoricalSession

session = HistoricalSession(startDateTime='2023-10-27T09:00:00', endDateTime='2023-10-27T17:00:00', refDate='2023-10-27')
non_defaults = session.nonDefaults()
print(non_defaults)
```

```python
from ib_async.objects import HistoricalSchedule

schedule = HistoricalSchedule(startDateTime='2023-10-27T00:00:00', endDateTime='2023-10-28T00:00:00', timeZone='EST')
non_defaults = schedule.nonDefaults()
print(non_defaults)
```

```python
from ib_async.objects import WshEventData

ws_event = WshEventData(conId=12345, fillWatchlist=True)
non_defaults = ws_event.nonDefaults()
print(non_defaults)
```
