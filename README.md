# IBKR TWS API Reference (MCP Optimized)

Cleaned, section-split, and Markdown-formatted IBKR TWS API documentation. Optimized for LLM context windows and Agentic workflows.

## LLM Integration

This repository is designed to be used with the **Model Context Protocol (MCP)**. This allows an LLM to browse and read specific API sections on demand without context overflow.

### Claude Desktop Configuration

Add this to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "tws-api-reference": {
      "command": "/absolute/path/to/npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/YOUR_USERNAME/path/to/repo/md-out"
      ]
    }
  }
}
```

### Adding `SKILL.md` to Antigravity.

If you are using Antigravity, you can install the TWS API skill as follows:

```bash
pnpm run install-skill
```

> [!NOTE]
> To make changes applied, you need to restart Claude Desktop or Antigravity.

## Updating and Contribution

A Node.js utility to transform the massive IBKR TWS API reference into a structured, searchable, and LLM-friendly knowledge base.

### Overview

The IBKR TWS API documentation is a single, large HTML page (~600KB+) that often exceeds efficient context limits for LLM agents. This tool automates the process of:
1. **Cleaning:** Stripping bloat, navigation, and scripts.
2. **Standardizing:** Extracting Python code snippets from tabbed interfaces.
3. **Localizing:** Fetching lazy-loaded images and relinking them locally.
4. **Chunking:** Splitting the monolithic page into individual H2-based HTML and Markdown files.

### Features

- **Sequential Splitting:** Files are prefixed (e.g., `001-introduction.md`) to maintain logical order.
- **LLM-Optimized:** Removes metadata, styles, and UI clutter to save tokens.
- **Dual Output:** Generates both cleaned `.html` and GFM-compliant `.md` files.
- **Asset Management:** Automatically handles lazy-loaded `data-src` images and symlinks them to the Markdown output directory.

### Tech Stack

- **Runtime:** Node.js 20+ (using `fetch` API)
- **Engine:** [Cheerio](https://cheerio.js.org/) for fast, server-side jQuery-like DOM manipulation.
- **Markdown:** [Turndown](https://github.com/mixmark/turndown) with GFM plugin for table and code block support.
- **Environment:** Optimized for `mise` (pnpm, TypeScript).

### Installation
```bash
pnpm install
```

### Run
```bash
pnpm split
```

## License

Not licensed.

All the TWS API reference sources are licensed by their respective owners: https://ibkrcampus.com/campus/