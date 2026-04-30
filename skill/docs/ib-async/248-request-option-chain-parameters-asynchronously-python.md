### Request Option Chain Parameters Asynchronously (Python)

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Asynchronously requests parameters for an option chain for a given underlying symbol and contract. Returns an Awaitable resolving to a list of OptionChain objects.

```python
reqSecDefOptParamsAsync(_underlyingSymbol_ , _futFopExchange_ , _underlyingSecType_ , _underlyingConId_)
```
