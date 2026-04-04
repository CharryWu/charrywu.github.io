# charrywu.github.io — Agent Instructions

Personal GitHub Pages site built with **VitePress 1.x**.

## Site purpose

The homepage (`docs/index.md`) is primarily a **project gallery** — a grid of tiles linking to software projects (with thumbnails, descriptions, and direct links). Notes are secondary and grouped under a single "Notes" tile that links to `docs/notes/index.md`.

**Priority order for homepage tiles:**
1. Software/open-source projects (each gets its own tile with icon + link)
2. Notes hub (one tile, last in the grid)

## Stack

| Layer | Tool |
|-------|------|
| SSG | VitePress (`docs/` source, `docs/.vitepress/dist/` output) |
| Styling | Custom CSS at `docs/.vitepress/theme/custom.css` |
| Package manager | Yarn (run all scripts via `yarn`, not `npm`) |
| Deploy | `sh deploy.sh` (see below) |

## Project layout

```
docs/
  index.md              # Landing page (layout: home)
  notes/index.md        # Notes hub
  dsa-notes/            # DSA & LeetCode notes
  fullstack/            # Fullstack interview notes
  ml-notes/             # ML/AI notes
  misc/                 # Miscellaneous articles
  public/               # Static assets (SVGs, images)
  .vitepress/
    config.ts           # Site config, nav, sidebar
    theme/
      index.js          # Theme entry (extends DefaultTheme)
      custom.css        # All custom CSS overrides
```

## Dev commands

```sh
yarn docs:dev      # local dev server (hot reload)
yarn docs:build    # production build → docs/.vitepress/dist/
yarn docs:preview  # preview the built output locally
```

## Deploy — CRITICAL

**Do NOT use `git commit` / `git add` / `git push` directly.**

Always deploy by running:

```sh
sh deploy.sh
```

`deploy.sh` builds the site, commits the dist output, and pushes to GitHub, which triggers the GitHub Actions pipeline that publishes to GitHub Pages. Running a bare `git commit` on the source tree skips the build and breaks the live site.

## CSS conventions

- All overrides go in `docs/.vitepress/theme/custom.css`.
- Home-page tile sizing is controlled via CSS variables on `:root` (icon height, details lines, etc.) — prefer changing variables over hardcoding values.
- Selectors for home-only styles are scoped under `.VPHomeFeatures` to avoid affecting doc pages.

## Content conventions

### Homepage (`docs/index.md`) — project gallery first
- Tiles are defined in the `features` array in frontmatter.
- **Project tiles come first.** Each project gets its own tile. Place the Notes tile last.
- Project tile fields: `title`, `details`, `link`, `linkText`, `icon` (with `src`, `alt`, `width`, `height`).
- External links (GitHub, live demos): add `target: _blank` and `rel: noopener noreferrer`.
- Project thumbnails live in `docs/public/` and are referenced as `/filename.svg` or `/filename.png`.

### Adding a new project tile
```yaml
- title: Project Name
  details: One-sentence description. Tech stack.
  link: https://...
  linkText: View Demo   # or "View on GitHub", "Play Game", etc.
  target: _blank
  rel: noopener noreferrer
  icon:
    src: /thumbnail.png
    alt: Project Name
    width: "128"
    height: "128"
```

### Notes hub (`docs/notes/index.md`)
- Plain Markdown. One `## [Section](link)` entry per note category.
- This page is only reachable via the Notes tile on the homepage — it is not a primary destination.
