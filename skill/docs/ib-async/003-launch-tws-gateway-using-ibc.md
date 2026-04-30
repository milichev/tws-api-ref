### Launch TWS/Gateway using IBC

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ibcontroller.html

Initializes the IBC controller with specific version and account credentials, then starts the application process. This example demonstrates the standard setup for a live gateway session.

```python
ibc = IBC(976, gateway=True, tradingMode='live',
    userid='edemo', password='demouser')
ibc.start()
IB.run()
```
