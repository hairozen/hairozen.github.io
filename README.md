# Hai Rozencwajg — personal website

A static, accessible personal homepage for collaborators. Plain HTML and CSS, with no framework, package installation, or build step. Content and links are in `index.html`; design and responsive layouts are in `styles.css`. The local `script.js` adds an optional typing animation with a pause/resume button. Reduced motion preferences show a static introduction, and the page remains usable without JavaScript.

## Preview locally

From this directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173. Stop the server with Ctrl-C.

The portrait is `assets/hai-portrait.jpg`, a web-sized copy of the supplied photo. The original photo is untouched. Fonts load from Google Fonts, with system sans-serif fallbacks when offline. All local assets use relative paths.

## GitHub Pages

Public site: https://hairozen.github.io/

The publication branch is `main`. GitHub Pages serves the repository root. Future changes deploy after they are pushed to this branch.

1. Push the reviewed website files to `hairozen/hairozen.github.io`.
2. In the repository’s **Settings → Pages**, select **Deploy from a branch**.
3. Select `main` and **/ (root)**, then save.
4. After GitHub deploys, open the Pages URL and check portrait, links, keyboard navigation, and mobile layout.

For a repository named `hairozen.github.io` owned by `hairozen`, the user-site URL is `https://hairozen.github.io/`. No workflow, analytics, tracking, forms, or JavaScript are required.
