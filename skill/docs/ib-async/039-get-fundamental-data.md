### GET /fundamental-data

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/ib.html

Requests fundamental data reports for a specific contract.

```APIDOC
## GET /fundamental-data

### Description
Retrieves fundamental data such as financial statements or reports for a contract.

### Method
GET

### Parameters
#### Request Body
- **contract** (Contract) - Required - The financial instrument contract.
- **reportType** (str) - Required - The type of fundamental report (e.g., 'FinancialSummary').

### Response
#### Success Response (200)
- **data** (str) - The fundamental data in XML or string format.
```
