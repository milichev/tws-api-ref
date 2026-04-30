### Get server version and connection statistics

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Retrieves the server version of the Interactive Brokers API and detailed statistics about the network connection. These are useful for diagnostics and monitoring the client's performance.

```python
server_version = client.serverVersion()
stats = client.connectionStats()

print(f"Server Version: {server_version}")
print(f"Connection Stats: {stats}")
```
