# `AGENTS.md`

## GOALS

* Build a documentation for IBKR TWS API from sources (see `SECTION_URLS` in `lib/generate.ts`):
  1. TWS API pages in IBKR Campus
  2. ib_async

* Output the parsed and pre-processed documentation above as sections in the following directory structure:

  <pre style="white-space: pre;">
  ./
    html/
      index.html -- HTML page with links to all sections titles only
      twsapi-doc/
        index.html -- section page with links to all subsections (full hierarchy)
        01-api-introduction.html
        ...
      .../
    skill/
      SKILL.md -- skill file with TOC with sections titles only (linked to docs/index.md or docs/<section>/index.md)
      docs/
        index.md -- markdown page with links to all section index.md files
        twsapi-doc/
          index.md -- section page with links to top-level chapters only
          01-api-introduction.md -- content of this chapter AND all its children (merged as subheadings)
          ...
        .../
  </pre>

* Format Parity:
  * IBKR Campus sources are generated in both `html` and `skill`.
  * `ib-async` (Ctx7) is generated as Markdown in `skill`, but the HTML version is just a link to the source website (https://ib-api-reloaded.github.io/ib_async) in the root HTML TOC.

* TOC requirements:
  * In `html` output directory:
    * `./index.html` - TOC of all sections titles only;
    * `./<section_name>/index.html` - the full hierarchy
  * In `skill` output directory:
    * `./skill/SKILL.md` - TOC of all sections titles only;
    * `./skill/docs/index.md` - TOC of all sections titles only;
    * `./skill/docs/<section_name>/index.md` - links to top-level chapters only (e.g. `01-...md`, `02-...md`);
    * `./skill/docs/<section_name>/<chapter_name>.md` - the content of the chapter AND the content of all its children (merged as subheadings). This flattens the hierarchy to Level 2 to prevent "tiny document" fragmentation while keeping it optimized for LLMs.

* So, there is two goals we aim here:

  1. Build a skill for LLM agents (Claude, Antigravity, etc.), which would be highly optimized to prevent context bloating and excessive roundtrips by merging sub-chapters into parent chapter files.

  2. Generate a human-readable documentation in HTML format for interactive use, maintaining the full hierarchy.

* NEXT PHASES:
  1. Relink pages from heterogeneous documents (TWS API Campus and ib_async Context7 pages) so that the resulting HTML and MD pages reference each other where needed.
  2. Resolve Markdown links in `skill/` (stubbed for now).
  3. Resolve broken image links in `skill/` (currently pointing to relative paths not present in `skill/docs/`).

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
