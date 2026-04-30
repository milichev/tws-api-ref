### Package Build and Distribution

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Commands for building the library package and publishing it to PyPI.

```bash
poetry build
poetry install
poetry config pypi-token.pypi your-api-token
poetry publish --build
```
