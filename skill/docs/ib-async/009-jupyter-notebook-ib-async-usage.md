### Jupyter Notebook ib-async Usage

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Provides the setup for using ib-async within a Jupyter Notebook environment. It requires starting the event loop using `util.startLoop()` and does not need `ib.run()`.

```python
from ib_async import *
util.startLoop()  # Required for notebooks

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)
# Your code here - no need to call ib.run()
```
