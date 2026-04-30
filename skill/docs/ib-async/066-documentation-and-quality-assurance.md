### Documentation and Quality Assurance

Source: https://ib-api-reloaded.github.io/ib_async/index.html

Commands for generating project documentation using Sphinx and performing static type checking with mypy.

```bash
poetry install --with=docs
poetry run sphinx-build -b html docs html
poetry run mypy ib_async
```
