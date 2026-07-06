# lovelysystems.github.io

This repository contains the website of Lovely Systems.

## Development

You need to statically serve the files in this folder, e.g. with Node.js
installed you can run `npx serve .`.

To change the API URL, you need to change the configuration in index.html;
search for `API_URL`.

Alternatively, visit https://www.lovelysystems.com/static/bookmarklets to add
helpful bookmarklets to your browser.

## Deployment

The site is served by GitHub Pages from the `main` branch (legacy Pages build,
served at the `CNAME` domain www.lovelysystems.com). There is no staging
environment: merging to `main` publishes to production automatically within
about a minute. Test changes locally (see Development) before merging.
