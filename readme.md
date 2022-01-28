# lovelysystems.github.io

This repository contains the website of Lovely Systems.

## How To: Add Platform

1. Make a screenshot of the site in Chrome's "iPad Air" (landscape).
2. Resize and optimize the image running this command (change file names as required):

```sh
convert input_ipad.png -resize 600 -quality 80% output.jpg
```

3. Copy the output JPG to `/static/images/asp`.
4. Add platform in `index.html` and `de.html`.
