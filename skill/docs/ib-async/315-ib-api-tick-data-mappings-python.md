### IB API Tick Data Mappings (Python)

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/wrapper.html

These dictionaries map integer tick type IDs to their corresponding string names for various categories of market data, including price, size, generic, Greeks, EFP, string, timestamp, and real-time volume. These mappings are crucial for interpreting raw tick data received from the IB API.

```Python
PRICE_TICK_MAP: Final[TickDict] = {
    6: "high",
    72: "high",
    7: "low",
    73: "low",
    9: "close",
    75: "close",
    14: "open",
    76: "open",
    15: "low13week",
    16: "high13week",
    17: "low26week",
    18: "high26week",
    19: "low52week",
    20: "high52week",
    35: "auctionPrice",
    37: "markPrice",
    50: "bidYield",
    103: "bidYield",
    51: "askYield",
    104: "askYield",
    52: "lastYield",
    57: "lastRthTrade",
    78: "creditmanMarkPrice",
    79: "creditmanSlowMarkPrice",
    92: "etfNavClose",
    93: "etfNavPriorClose",
    94: "etfNavBid",
    95: "etfNavAsk",
    96: "etfNavLast",
    97: "etfFrozenNavLast",
    98: "etfNavHigh",
    99: "etfNavLow",
    101: "estimatedIpoMidpoint",
    102: "finalIpoLast",
}


SIZE_TICK_MAP: Final[TickDict] = {
    8: "volume",
    74: "volume",
    63: "volumeRate3Min",
    64: "volumeRate5Min",
    65: "volumeRate10Min",
    21: "avVolume",
    22: "openInterest",
    27: "callOpenInterest",
    28: "putOpenInterest",
    29: "callVolume",
    30: "putVolume",
    34: "auctionVolume",
    36: "auctionImbalance",
    61: "regulatoryImbalance",
    86: "futuresOpenInterest",
    87: "avOptionVolume",
    89: "shortableShares",
}

GENERIC_TICK_MAP: Final[TickDict] = {
    23: "histVolatility",
    24: "impliedVolatility",
    31: "indexFuturePremium",
    46: "shortable",
    49: "halted",
    54: "tradeCount",
    55: "tradeRate",
    56: "volumeRate",
    58: "rtHistVolatility",
    60: "bondFactorMultiplier",
    90: "delayedHalted",
}

GREEKS_TICK_MAP: Final[TickDict] = {
    10: "bidGreeks",
    80: "bidGreeks",
    11: "askGreeks",
    81: "askGreeks",
    12: "lastGreeks",
    82: "lastGreeks",
    13: "modelGreeks",
    83: "modelGreeks",
    53: "custGreeks",
}

EFP_TICK_MAP: Final[TickDict] = {
    38: "bidEfp",
    39: "askEfp",
    40: "lastEfp",
    41: "openEfp",
    42: "highEfp",
    43: "lowEfp",
    44: "closeEfp",
}

STRING_TICK_MAP: Final[TickDict] = {
    25: "optionBidExch",
    26: "optionAskExch",
    32: "bidExchange",
    33: "askExchange",
    84: "lastExchange",
    85: "lastRegTime",
    91: "reutersMutualFunds",
    100: "socialMarketAnalytics",
}

TIMESTAMP_TICK_MAP: Final[TickDict] = {
    45: "lastTimestamp",
    88: "delayedLastTimestamp",
}

RT_VOLUME_TICK_MAP: Final[TickDict] = {
    48: "rtVolume",
    77: "rtTradeVolume",
}
```
