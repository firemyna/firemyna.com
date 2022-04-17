---
layout: "../../../layouts/Docs.astro"
---

# `firemyna generate:callable`

Generate a callable function:

```bash
npx firemyna generate:callable functionName
# Or
npx firemyna g:callable functionName
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";

export default functions.https.onCall((data, context) => {
  return "Hi from functionName!";
});
```

[Read more about callable functions in the Firebase Documentation →](https://firebase.google.com/docs/functions/callable)

The available arguments:

- [`--memory`](#--memory) - function memory to set
- [`--region`](#--region) - function region to set
- [`--cwd`](#--cwd) - specify the working directory
- [`--config`](#--config) - specify the config path to use
- [`--help`](#--help) - show help for the command

## `--memory`

You can set the Function memory with `--memory` argument:

```bash
npx firemyna generate:callable functionName --memory 1GB
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";

export default functions
  .runWith({ memory: "1GB" })
  .https.onCall((data, context) => {
    return "Hi from functionName!";
  });
```

Run `npx firemyna generate:callable --help` to learn about the available options.

## `--region`

You can set the Function region with `--region` argument:

```bash
npx firemyna generate:callable functionName --region europe-west3
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";

export default functions
  .region("europe-west3")
  .https.onCall((data, context) => {
    return "Hi from functionName!";
  });
```

Run `npx firemyna generate:callable --help` to learn about the available options.

## `--cwd`

Use `--cwd` to specify the working directory:

```bash
npx firemyna generate:callable functionName --cwd ./apps/website
```

## `--config`

Use `--config` to specify the config path to use:

```bash
npx firemyna generate:callable functionName --config ./configs/firemyna.js
```

## `--help`

Use `--help` to learn about the arguments and available options:

```bash
npx firemyna generate:callable --help
```
