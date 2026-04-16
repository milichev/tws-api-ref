## Setting Management

Beginning with TWS API 10.44, the API can be used to modify Trader Workstation settings as they relate to Orders, Precautions, and API Settings.  
While settings may be modified through this method, Read-Only access to the system must be first disabled manually through the GUI. See [TWS Settings](/campus/ibkr-api-page/twsapi-doc/#tws-config-api).

### Request Configuration

#### EClient.reqConfigProtoBuf(

**configRequestProto**: [ConfigRequestProto](/campus/ibkr-api-page/protobuf-reference/#config-response)  
Contains the Proto object for the configuration request.  
Must have the reqId field passed.

#### )

from ibapi.protobuf.ConfigRequest\_pb2 import ConfigRequest as ConfigRequestProto

configRequestProto = ConfigRequestProto()
configRequestProto.reqId = 123
self.reqConfigProtoBuf(configRequestProto)

### Receive Configuration

#### EWrapper.configResponseProtoBuf

**configResponseProto**: [ConfigResponseProto](/campus/ibkr-api-page/protobuf-reference/#config-response)  
Contains the Proto response object for the configuration. Includes [LockAndExitConfig](/campus/ibkr-api-page/protobuf-reference/#lock-and-exit), [MessageConfig](/campus/ibkr-api-page/protobuf-reference/#message-config), [ApiConfig](/campus/ibkr-api-page/protobuf-reference/#api-config), and [OrdersConfig](https://www.interactivebrokers.com/campus/ibkr-api-page/protobuf-reference/#orders-config).

#### )

from ibapi.protobuf.ConfigResponse\_pb2 import ConfigResponse as ConfigResponseProto

def configResponseProtoBuf(self, configResponseProto: ConfigResponseProto):
    print(configResponseProto)

### Request Configuration Update

#### EClient.updateConfigProtoBuf(

**updateConfigRequestProto**: [UpdateConfigRequestProto](/campus/ibkr-api-page/protobuf-reference/#update-config-request)  
Contains the Proto object for updating the configuration request.  
Must have the reqId field passed.

#### )

from ibapi.protobuf.UpdateConfigRequest\_pb2 import UpdateConfigRequest as UpdateConfigRequestProto
from ibapi.protobuf.ApiConfig\_pb2 import ApiConfig as ApiConfigProto
from ibapi.protobuf.ApiSettingsConfig\_pb2 import ApiSettingsConfig as ApiSettingsConfigProto

# Instantiate Proto Classes...
updateConfigRequestProto = UpdateConfigRequestProto()
apiConfigProto = ApiConfigProto()
apiSettingsConfigProto = ApiSettingsConfigProto()

# Assign the settings to change...
apiSettingsConfigProto.createApiMessageLogFile = True
apiSettingsConfigProto.includeMarketDataInLogFile = True
apiSettingsConfigProto.loggingLevel = "Detail"
        
# Copy nested Object content to parent...
apiConfigProto.settings.CopyFrom(apiSettingsConfigProto)
updateConfigRequestProto.reqId = orderId
updateConfigRequestProto.api.CopyFrom(apiConfigProto)

# Submit updates
self.updateConfigProtoBuf(updateConfigRequestProto)

### Receive Configuration Update

#### EWrapper.updateConfigResponseProtoBuf

**updateConfigResponseProto**: [UpdateConfigResponseProto](/campus/ibkr-api-page/protobuf-reference/#update-config-response)  
Contains the Proto response object for the configuration update. Includes message, changedFields, errors, and [UpdateConfigWarning.](/campus/ibkr-api-page/protobuf-reference/#update-config-warning)

#### )

from ibapi.protobuf.UpdateConfigResponse\_pb2 import UpdateConfigResponse as UpdateConfigResponseProto

def updateConfigResponseProtoBuf(self, updateConfigResponseProto: UpdateConfigResponseProto):
    print(updateConfigResponseProto)