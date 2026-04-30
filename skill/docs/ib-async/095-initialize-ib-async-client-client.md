### Initialize ib_async.client.Client

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Initializes the asynchronous client for Interactive Brokers. It sets up event handlers, a decoder, and connection statistics. Optional wrapper methods for price/size ticks, and TCP data arrival/processing can be provided.

```python
client = Client(wrapper)
# Optional: Configure throttling
client.MaxRequests = 45
client.RequestsInterval = 1
```
