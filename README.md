# FrostieStack Landing Page

# How to run

* `<env>`
  * dev (default)
  * prod

```bash
make up ENV=<env> # or just `make up`
```

This will build the docker image and start the container. And you should be able to see the page at

* ENV=dev - http://localhost:5173
* ENV=prod - http://localhost:3080

To stop the container, run:

```bash
make down
```

The output will be written to the ./dist directory on your local machine. You can then serve the contents of dist/ using any static file server or deploy it to GitHub Pages or a CDN.

To stop the container, run:

```bash
make build.dist
```