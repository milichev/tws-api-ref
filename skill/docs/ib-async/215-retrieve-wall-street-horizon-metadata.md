### Retrieve Wall Street Horizon Metadata

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Demonstrates how to fetch WSH metadata, including available filters and event types, using the blocking getWshMetaData method.

```python
# Get the list of available filters and event types:
meta = ib.getWshMetaData()
print(meta)
```
