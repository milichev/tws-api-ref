# `AGENTS.md`

## GOALS

* Build a documentation for IBKR TWS API from sources (see `SECTION_URLS` in `lib/generate.ts`):
  1. TWS API pages in IBKR Campus
  2. ib_async

* Output the parsed and pre-processed documentation above as sections in the following directory structure:

  <pre style="white-space: pre;">
  ./
    html/
      index.html -- HTML page with links to all sections below
      twsapi-doc/
        index.html -- section page with links to all subsections below
        01-api-introduction.html
        ...
      .../
    skill/
      SKILL.md -- skill file with TOC with sections titles (linked to docs/ files)
      docs/
        index.md -- markdown page with links to all MD sections below
        twsapi-doc/
          index.md -- section page with links to all subsections
          01-api-introduction.md
          ...
        .../
  </pre>

* Since the source docs are in different format (some in HTML, other in MD), the sections should be generated in both `html` and `skill` directories (with the conversion to the opposite format).

* TOC requirements:
  * In `html` output directory:
    * `./index.html` - TOC of all sections titles only (don't render sections subsections);
    * ./<section_name>/index.html` - the full hierarchy
  * In `skill` output directory:
    * `./skill/SKILL.md` - TOC of all sections titles only (don't render sections subsections);
    * `./skill/docs/<section_name>/index.md` - only the top-level TOC (no subsections/sections); sections should be linked from here,
    * `./skill/docs/<section_name>/<subsection_name>.md` - the full hierarchy of the subsection, e.g. `08-unqiue-configurations.md`, including nested subheadings, if any.

* So, there is two goals we aim here:

  1. Build a skill for LLM agents (Claude, Antigravity, etc.), which would be highly optimized to prevent context bloating.

  2. Generate a human-readable documentation in HTML format for interactive use.

* NEXT PHASES:
  1. Relink pages from heterogeneous documents (TWS API Campus and ib_async Context7 pages) so that the resulting HTML and MD pages reference each other where needed.

## RULES 

* First thing, run this script once to initialize terminal session:
  ```bash
  eval "$(/opt/homebrew/bin/brew shellenv)"
  eval "$(/Users/milichev/.local/bin/mise activate zsh)"
  source ~/.orbstack/shell/init.zsh 2>/dev/null || :
  ```

* All outputs should be rendered with `handlebars` templates:
  * Template sources are in `./templates`, with respective extensions: html or md.
  * Template compiled functions are in `lib/utils.ts`.
