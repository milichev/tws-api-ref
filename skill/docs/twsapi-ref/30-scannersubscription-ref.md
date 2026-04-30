[IBKR TWS API](../../SKILL.md) · [TWS API Reference](index.md) · [30 ScannerSubscription Class Reference](30-scannersubscription-ref.md)


## ScannerSubscription Class Reference

Defines a market scanner request.

Set the minimum Coupon Rate

Set the maximum Coupon Rate

| Name | Type | Description |
| --- | --- | --- |
| NumberOfRows | int | Determine the number of rows or results from the market scanner to be returned. Returns the maximum, 50, by default. |
| Instrument | string | Returns the Instrument type to be returned. See scannerParameters xml response for details. |
| LocationCode | string | Returns the exchange regions to be returned. See scannerParameters xml response for details. |
| ScanCode | string | Returns the code to sort results by. See scannerParameters xml response for details. |
| AbovePrice | double | Set the maximum MARK price to filter by. |
| BelowPrice | double | Set the minimum MARK price to filter by. |
| AboveVolume | int | Set the minimum trade volume of the day. |
| AverageOptionVolumeAbove | int | Determine the minimum average option volume from the underlying. |
| MarketCapAbove | double | Set the minimum market cap restriction. |
| MarketCapBelow | double | Set the maximum market cap restriction. |
| MoodyRatingAbove | string | Minimum Moody Rating |
| MoodyRatingBelow | string | Maximum Moody Rating |
| SpRatingAbove | string | Standard & Poor’s (S&P) uses a letter-based rating system to evaluate the creditworthiness of bonds and debt issuers. This field will indicate the lowest acceptable rating to be returned from the result. |
| SpRatingBelow | string | Standard & Poor’s (S&P) uses a letter-based rating system to evaluate the creditworthiness of bonds and debt issuers. This field will indicate the highest acceptable rating to be returned from the result. |
| MaturityDateAbove | string | Set the minimum Maturity date. Formatted as YYYYMMDD. |
| MaturityDateBelow | string | Set the maximum Maturity date. Formatted as YYYYMMDD. |
| CouponRateAbove | double |  |
| CouponRateBelow | double |  |
| ExcludeConvertible | bool | Determine of the bond should be convertible or not. |
| ScannerSettingPairs | string | TagValue pair to indicate scanner restrictions. Currently only supports TagValue(“annualVolatility”, true) or an empty list. |
| StockTypeFilter | string | Determine the stock type: Common, CORP, ADR, ETF, ETN, REIT, CEF, ETMF, EFN |
