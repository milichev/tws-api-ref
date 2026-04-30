### POST /reqPositions

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Requests the current portfolio positions.

```APIDOC
## POST /reqPositions

### Description
Requests the current positions for the account associated with the client.

### Method
POST

### Endpoint
/reqPositions

### Request Example
{}

### Response
#### Success Response (200)
- **positions** (array) - List of current holdings.
```
