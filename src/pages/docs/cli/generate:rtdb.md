---
layout: "../../../layouts/Docs.astro"
---

# `firemyna generate:rtdb`

Generate a Realtime Database trigger function:

```bash
npx firemyna generate:rtdb functionName create "orders/{orderId}"
# Or
npx firemyna g:rtdb functionName create "orders/{orderId}"
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";

export default functions.database
  .ref("orders/{orderId}")
  .onCreate((snapshot, context) => {
    console.log("Hi from functionName!");
  });
```

[Read more about Realtime Database trigger functions in the Firebase Documentation →](https://firebase.google.com/docs/functions/database-events)

The possible event (second argument) values:

- `create`
- `update`
- `delete`
- `write`

The available arguments:

- [`--memory`](#--memory) - function memory to set
- [`--region`](#--region) - function region to set
- [`--cwd`](#--cwd) - specify the working directory
- [`--config`](#--config) - specify the config path to use
- [`--help`](#--help) - show help for the command

## `--instance`

You can set the Relatime Datbase instance name to add trigger to with `--instance` argument:

```bash
npx firemyna generate:rtdb functionName --instance db-2
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";

export default functions.database
  .instance("db-2")
  .ref("orders/{orderId}")
  .onCreate((snapshot, context) => {
    console.log("Hi from functionName!");
  });
```

## `--memory`

You can set the Function memory with `--memory` argument:

```bash
npx firemyna generate:rtdb functionName --memory 1GB
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";

export default functions
  .runWith({ memory: "1GB" })
  .database.ref("orders/{orderId}")
  .onCreate((snapshot, context) => {
    console.log("Hi from functionName!");
  });
```

Run `npx firemyna generate:rtdb --help` to learn about the available options.

## `--region`

You can set the Function region with `--region` argument:

```bash
npx firemyna generate:rtdb functionName --region europe-west3
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";

export default functions
  .region("europe-west3")
  .database.ref("orders/{orderId}")
  .onCreate((snapshot, context) => {
    console.log("Hi from functionName!");
  });
```

Run `npx firemyna generate:rtdb --help` to learn about the available options.

## `--cwd`

Use `--cwd` to specify the working directory:

```bash
npx firemyna generate:rtdb functionName --cwd ./apps/website
```

## `--config`

Use `--config` to specify the config path to use:

```bash
npx firemyna generate:rtdb functionName --config ./configs/firemyna.js
```

## `--help`

Use `--help` to learn about the arguments and available options:

```bash
npx firemyna generate:rtdb functionName --help
```
