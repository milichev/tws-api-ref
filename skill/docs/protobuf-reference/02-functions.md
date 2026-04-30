[IBKR TWS API](../../SKILL.md) · [Protobuf Reference](index.md) · [02 Important Protobuf Functions](02-functions.md)


## Important Protobuf Functions

When interacting directly with protobuf classes, proto-specific functions need to be used.

### CopyFrom

### 02.01 CopyFrom

A standard method of the Message class of protobuf. Is used to copy items in a field from one object to another.  
See [See Details](https://protobuf.dev/getting-started/pythontutorial/#:~:text=the%20value%202.-,Standard%20Message%20Methods,-Each%20message%20class)

```python
apiConfigProto = ApiConfigProto()
apiSettingsConfigProto = ApiSettingsConfigProto()

apiSettingsConfigProto.createApiMessageLogFile = True
apiSettingsConfigProto.includeMarketDataInLogFile = True
apiSettingsConfigProto.loggingLevel = "Detail"
        
apiConfigProto.settings.CopyFrom(apiSettingsConfigProto)
```
