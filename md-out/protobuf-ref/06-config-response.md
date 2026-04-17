*   [TWS API](../index.md)
*   [ProtoBuf Reference](index.md)
*   [06 ConfigResponse](06-config-response.md)

## ConfigResponse

**reqId**: `Integer` – Request identifier

**lockAndExit**: `LockAndExitConfig`– Container object for all Lock And Exit Configurations.

**messages**: `MessageConfig`– Container object for repeated message objects.

**api**: `ApiConfig` – Container object for API Configuration page details

**orders**: `OrdersConfig`– Container object for the Orders settings.

reqId: 1784381601
    lockAndExit {
      autoLogoffTime: "12:07"
      autoLogoffPeriod: "AM"
      autoLogoffType: "restart"
    }
    messages {
      id: 3
      title: "Simultaneous market data limit exceeded"
      message: "<html>You have requested data for %s instruments simultaneously, which exceeds your current account limit of %s<br>lines of simultaneous market data. You can increase your data limit by subscribing to market data <a href=\\'#action\\'>Booster packs</a>%s</html>"
      defaultAction: "Hidden"
      enabled: false
    }
    ...
    messages {
      id: 11001
      title: "Exchange-specific warning: LMTDOWN"
      defaultAction: "Hidden"
      enabled: true
    }
    api {
      precautions {
        bypassOrderPrecautions: true
        ...
        bypassRouteMarketableToBBO: false
      }
      settings {
        readOnlyApi: false
        totalQuantityForMutualFunds: false
        ...
        allowLocalhostOnly: false
        trustedIPs: "127.0.0.1"
      }
    }
    orders {
      smartRouting {
        seekPriceImprovement: false
        doNotRouteToDarkPools: false
        defaultAlgorithm: "SMART"
      }
    }