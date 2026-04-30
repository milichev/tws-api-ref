  [index.html](IBKR TWS API) -> 
  [07-lock-and-exit.md](07 LockAndExit) -> 

 07 LockAndExit


## LockAndExit

**autoLogoffTime:** `String` – Time the system should automatically logout or shut down.

**autoLogoffPeriod:** `String` – Declare autoLogoffTime as AM or PM.

**autoLogoffType:** `String` – Declare if platform should logout or restart and continue running.

lockAndExitProto = LockAndExitConfigProto()
lockAndExitProto.autoLogoffTime = "11:59"
lockAndExitProto.autoLogoffPeriod = "PM"
lockAndExitProto.autoLogoffType = "restart"
