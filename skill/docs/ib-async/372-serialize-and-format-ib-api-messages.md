### Serialize and Format IB API Messages

Source: https://ib-api-reloaded.github.io/ib_async/_modules/ib_async/client.html

Uses a dictionary of lambda functions to convert various Python types into IBKR protocol-compliant strings. It iterates through fields, applies the appropriate converter, and buffers the result with null-byte delimiters.

```python
FORMAT_HANDLERS = {
	int: lambda f: "" if makeEmpty and f == UNSET_INTEGER else str(f),
	type(None): lambda _: "",
	str: lambda s: s,
	bool: lambda b: "1" if b else "0",
	list: lambda lst: "".join([f"{v.tag}={v.value};" for v in lst]),
}

msg = io.StringIO()
for field in fields:
	convert = FORMAT_HANDLERS.get(Contract if isinstance(field, Contract) else type(field), str)
	msg.write(convert(field))
	msg.write("\0")
generated = msg.getvalue()
```
