### Fetch Historical Data and Calculate SMA with ib_async

Source: https://ib-api-reloaded.github.io/ib_async/readme.html

This Python snippet demonstrates how to connect to the IBKR API, request historical data for different timeframes (daily and 5-minute bars), convert the data into pandas DataFrames, and calculate a 20-day Simple Moving Average (SMA). It uses the `ib_async` library for API interaction and `pandas` for data manipulation.

```python
from ib_async import *
import pandas as pd

ib = IB()
ib.connect('127.0.0.1', 7497, clientId=1)

# Get multiple timeframes
contract = Stock('SPY', 'SMART', 'USD')

# Daily bars for 1 year
daily_bars = ib.reqHistoricalData(
    contract, endDateTime='', durationStr='1 Y',
    barSizeSetting='1 day', whatToShow='TRADES', useRTH=True)

# 5-minute bars for last 5 days
intraday_bars = ib.reqHistoricalData(
    contract, endDateTime='', durationStr='5 D',
    barSizeSetting='5 mins', whatToShow='TRADES', useRTH=True)

# Convert to DataFrames
daily_df = util.df(daily_bars)
intraday_df = util.df(intraday_bars)

print(f"Daily bars: {len(daily_df)} rows")
print(f"Intraday bars: {len(intraday_df)} rows")

# Calculate simple moving average
daily_df['SMA_20'] = daily_df['close'].rolling(20).mean()
print(daily_df[['date', 'close', 'SMA_20']].tail())

ib.disconnect()

```
