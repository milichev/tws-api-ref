### Tickfilter Class and Methods

Source: https://ib-api-reloaded.github.io/ib_async/api.html

The `Tickfilter` class is used for filtering and emitting tick data. It takes tick types and an optional source during initialization. The `on_source` method emits values to listeners, and `timebars` can be used for time-based bar generation.

```python
_class _ib_async.ticker.Tickfilter(_tickTypes_ , _source =None_)[source]
    
Tick filtering event operators that `emit(time, price, size)`. 

on_source(_ticker_)[source]
    
Emit a new value to all connected listeners. 

Parameters:
    
**args** – Argument values to emit to listeners. 

timebars(_timer_)[source]
    

```
