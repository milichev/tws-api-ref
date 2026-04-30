### GET /fundamental-data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Retrieves fundamental financial data for a contract in XML format.

```APIDOC
## GET /fundamental-data

### Description
Fetches fundamental data reports such as financial summaries, ownership, or statements for a specific contract.

### Method
GET

### Endpoint
/fundamental-data

### Parameters
#### Query Parameters
- **contract** (Contract) - Required - The contract to query.
- **reportType** (string) - Required - Type of report (e.g., 'ReportsFinSummary', 'ReportsOwnership', 'ReportSnapshot').

### Response
#### Success Response (200)
- **data** (string) - XML formatted fundamental data.

### Response Example
{
  "data": "<xml>...</xml>"
}
```
