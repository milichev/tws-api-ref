### Execution Patterns for Scripts, Notebooks, and Async Apps

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

Provides standard templates for running ib-async code in different environments. Includes basic scripts, Jupyter notebook event loops, and async/await application structures.

```python
# Basic Script
from ib_async import *
ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)
ib.disconnect()

# Jupyter Notebook
util.startLoop()
ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Async Application
import asyncio
async def main():
    ib = IB()
    await ib.connectAsync('127.0.0.1', 7497, clientId=1)
    ib.disconnect()
asyncio.run(main())
```
