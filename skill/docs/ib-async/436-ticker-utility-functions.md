### Ticker Utility Functions

Source: https://ib-api-reloaded.github.io/ib_async/api.html

This section details utility functions for ticker objects. These functions help in checking the validity of data, such as whether bid and ask prices are available, and in calculating derived values like the midpoint between bid and ask.

```python
isUnset(_value_)[source]
     
Return type:
    
`bool` 

hasBidAsk()[source]
    
See if this ticker has a valid bid and ask. 

Return type:
    
`bool` 

midpoint()[source]
    
Return average of bid and ask, or defaults.unset if no valid bid and ask are available. 

Return type:
    
`float` 

marketPrice()[source]
    
Return the first available one of :rtype: `float`
  * last price if within current bid/ask or no bid/ask available;
  * average of bid and ask (midpoint).

```
