### Retrieve WSH Metadata and Event Data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Blocking convenience methods to fetch WSH metadata (filters/event types) and specific event data as JSON strings. Requires a valid Wall Street Horizon subscription.

```python
# Get the list of available filters and event types:
meta = ib.getWshMetaData()
print(meta)

# For IBM (with conId=8314) query the:
#   - Earnings Dates (wshe_ed)
#   - Board of Directors meetings (wshe_bod)
data = WshEventData(
    filter = '''{
      "country": "All",
      "watchlist": ["8314"],
      "limit_region": 10,
      "limit": 10,
      "wshe_ed": "true",
      "wshe_bod": "true"
    }''')
events = ib.getWshEventData(data)
print(events)
```
