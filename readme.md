# lovelysystems.github.io

This repository contains the website of Lovely Systems.

## Development

You need to statically serve the files in this folder, e.g. with Node.js
installed you can run `npx serve .`.

To change the API URL, you need to change the configuration in index.html;
search for `API_URL`.

## Switch Conversational AI Environment:

Bookmarklets:

- <a href="javascript:(function()%7Bwindow.C.API_URL%20%3D%20'https%3A%2F%2Fwebsite-api.stg.ls-lab.lovelysystems.com%2Fconversations%2Fstream'%3B%7D)()%3B">♥ly Conversational: STG</a>
- <a href="javascript:(function()%7Bwindow.C.API_URL%20%3D%20'https%3A%2F%2Fwebsite-api.prod.ls-lab.lovelysystems.com%2Fconversations%2Fstream'%3B%7D)()%3B">♥ly Conversational: PROD</a>

## Notes

- `t25.html` is the target location of our 2025 T-Shirt QR Campaign
