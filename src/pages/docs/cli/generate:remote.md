---
layout: "../../../layouts/Docs.astro"
---

# `firemyna generate:remote`

TODO

The available arguments:

- [`--memory`](#--memory) - function memory to set
- [`--region`](#--region) - function region to set
- [`--cwd`](#--cwd) - specify the working directory
- [`--config`](#--config) - specify the config path to use
- [`--help`](#--help) - show help for the command

## `--memory`

You can set the Function memory with `--memory` argument:

```bash
npx firemyna generate:remote functionName --memory 1GB
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";

export default functions
  .runWith({ memory: "1GB" })
  // TODO
  .https.onRequest((request, response) => {
    response.send("Hi from functionName!");
  });
```

Run `npx firemyna generate:remote --help` to learn about the available options.

## `--region`

You can set the Function region with `--region` argument:

```bash
npx firemyna generate:remote functionName --region europe-west3
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";

export default functions
  .region("europe-west3")
  // TODO
  .https.onRequest((request, response) => {
    response.send("Hi from functionName!");
  });
```

Run `npx firemyna generate:remote --help` to learn about the available options.

## `--cwd`

Use `--cwd` to specify the working directory:

```bash
npx firemyna generate:remote functionName --cwd ./apps/website
```

## `--config`

Use `--config` to specify the config path to use:

```bash
npx firemyna generate:remote functionName --config ./configs/firemyna.js
```

## `--help`

Use `--help` to learn about the arguments and available options:

```bash
npx firemyna generate:remote functionName --help
```
