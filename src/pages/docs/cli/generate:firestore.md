---
layout: "../../../layouts/Docs.astro"
---

# `firemyna generate:firestore`

Generate a Firestore trigger function:

```bash
npx firemyna generate:firestore functionName create "orders/{orderId}"
# Or
npx firemyna g:firestore functionName create "orders/{orderId}"
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";

export default functions.firestore
  .document("orders/{orderId}")
  .onCreate((snapshot, context) => {
    console.log("Hi from functionName!");
  });
```

[Read more about Firestore trigger functions in the Firebase Documentation →](https://firebase.google.com/docs/functions/firestore-events)

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

## `--memory`

You can set the Function memory with `--memory` argument:

```bash
npx firemyna generate:firestore functionName create "orders/{orderId}" --memory 1GB
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";

export default functions
  .runWith({ memory: "1GB" })
  .firestore.document("orders/{orderId}")
  .onCreate((snapshot, context) => {
    console.log("Hi from functionName!");
  });
```

Run `npx firemyna generate:firestore --help` to learn about the available options.

## `--region`

You can set the Function region with `--region` argument:

```bash
npx firemyna generate:firestore functionName create "orders/{orderId}" --region europe-west3
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";

export default functions
  .region("europe-west3")
  .firestore.document("orders/{orderId}")
  .onCreate((snapshot, context) => {
    console.log("Hi from functionName!");
  });
```

Run `npx firemyna generate:firestore --help` to learn about the available options.

## `--cwd`

Use `--cwd` to specify the working directory:

```bash
npx firemyna generate:firestore functionName create "orders/{orderId}" --cwd ./apps/website
```

## `--config`

Use `--config` to specify the config path to use:

```bash
npx firemyna generate:firestore functionName create "orders/{orderId}" --config ./configs/firemyna.js
```

## `--help`

Use `--help` to learn about the arguments and available options:

```bash
npx firemyna generate:firestore functionName --help
```
