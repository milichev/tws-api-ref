### GET /account/summary

Source: https://ib-api-reloaded.github.io/ib_async/api.html

Retrieves account-related data including values, portfolio items, and positions.

```APIDOC
## GET /account/summary

### Description
Retrieves a list of account values, portfolio items, or positions. Can be filtered by account name.

### Method
GET

### Parameters
#### Query Parameters
- **account** (string) - Optional - The account name to filter by.

### Response
#### Success Response (200)
- **data** (list) - List of AccountValue, PortfolioItem, or Position objects.

### Response Example
{
  "data": [{"account": "U123456", "value": 1000.0}]
}
```
