# Kanthalloor Tourist Guide

A fast, dependency-free tourism website for Kanthalloor and Marayoor, Kerala.

## Project structure

```text
.
|-- .github/
|   `-- workflows/
|       `-- pages.yml
|-- public/
|   |-- index.html
|   |-- photo-credits.html
|   |-- robots.txt
|   |-- sitemap.xml
|   |-- .nojekyll
|   |-- assets/
|   |   |-- css/
|   |   `-- images/
|-- REDESIGN_NOTES.md
`-- README.md
```

## Run locally

This is a static website, so there are no packages to install and no build step.

### Recommended: local web server

From the repository root, run:

```powershell
python -m http.server 8000 --directory public
```

If Windows does not recognize `python`, try the Python launcher instead:

```powershell
py -m http.server 8000 --directory public
```

Then open [http://localhost:8000](http://localhost:8000) in a browser. Keep the
terminal window open while using the site. Press `Ctrl+C` in that terminal to
stop the server.

### Node.js alternative

If Node.js is installed, you can serve the site without adding anything to the
repository:

```powershell
npx serve public
```

Open the local address printed by `serve`, usually
[http://localhost:3000](http://localhost:3000).

### Open without a server

You can also double-click `public/index.html`. Most of the site works through a
`file://` URL, but a local web server is recommended because it more closely
matches production hosting and avoids browser restrictions on local files.

No build step is required.

## Caching

The `public/` directory includes `_headers` rules for Netlify and Cloudflare
Pages, plus equivalent `.htaccess` rules for Apache/cPanel hosting. HTML is
revalidated on each visit, while fonts and icons receive long-lived immutable
caching and images receive a 30-day browser cache with stale-while-revalidate
support.

## Conventions

- Page markup lives in `public/index.html`.
- Shared styles live in `public/assets/css/`.
- Local image assets live in `public/assets/images/`.
- Use relative paths so the site works locally and on static hosting.
- Keep third-party image attribution current in `public/photo-credits.html`.

## GitHub Pages

The Pages workflow deploys only the contents of `public/` when changes reach
the `main` branch. In the repository's **Settings > Pages** screen, set the
source to **GitHub Actions**. You can also run the workflow manually from the
Actions tab.
