### POST /reqAccountSummary

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests account summary data for a specific account group.

```APIDOC
## POST /reqAccountSummary

### Description
Requests account summary data for a specified group and set of tags.

### Method
POST

### Endpoint
/reqAccountSummary

### Parameters
#### Request Body
- **reqId** (int) - Required - Unique request ID.
- **groupName** (string) - Required - Account group name.
- **tags** (string) - Required - Comma-separated list of account tags.

### Request Example
{
  "reqId": 1,
  "groupName": "All",
  "tags": "NetLiquidation,TotalCashValue"
}
```
