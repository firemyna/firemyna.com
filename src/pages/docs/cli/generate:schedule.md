---
layout: "../../../layouts/Docs.astro"
---

# `firemyna generate:schedule`

Generate a callable function:

```bash
npx firemyna generate:schedule functionName "every 5 minutes"
# Or
npx firemyna g:schedule functionName "every 5 minutes"
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";

export default functions.pubsub.schedule("every 5 minutes").onRun((context) => {
  console.log("Hi from functionName!");
});
```

[Read more about schedule functions in the Firebase Documentation →](https://firebase.google.com/docs/functions/schedule-functions)

The available arguments:

- [`--tz`](#--tz) - the time zone to use
- [`--memory`](#--memory) - function memory to set
- [`--region`](#--region) - function region to set
- [`--cwd`](#--cwd) - specify the working directory
- [`--config`](#--config) - specify the config path to use
- [`--help`](#--help) - show help for the command

## `--memory`

You can set the time zone to use for the schedule with `--tz` argument:

```bash
npx firemyna generate:schedule functionName "every 5 minutes" --tz "UTC"
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";

export default functions.pubsub
  .schedule("every 5 minutes")
  .timeZone("UTC")
  .onRun((context) => {
    console.log("Hi from functionName!");
  });
```

## `--memory`

You can set the Function memory with `--memory` argument:

```bash
npx firemyna generate:schedule functionName "every 5 minutes" --memory 1GB
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";

export default functions
  .runWith({ memory: "1GB" })
  .pubsub.schedule("every 5 minutes")
  .onRun((context) => {
    console.log("Hi from functionName!");
  });
```

Run `npx firemyna generate:schedule --help` to learn about the available options.

## `--region`

You can set the Function region with `--region` argument:

```bash
npx firemyna generate:schedule functionName "every 5 minutes" --region europe-west3
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";

export default functions
  .region("europe-west3")
  .pubsub.schedule("every 5 minutes")
  .onRun((context) => {
    console.log("Hi from functionName!");
  });
```

Run `npx firemyna generate:schedule --help` to learn about the available options.

## `--cwd`

Use `--cwd` to specify the working directory:

```bash
npx firemyna generate:schedule functionName "every 5 minutes" --cwd ./apps/website
```

## `--config`

Use `--config` to specify the config path to use:

```bash
npx firemyna generate:schedule functionName "every 5 minutes" --config ./configs/firemyna.js
```

## `--help`

Use `--help` to learn about the arguments and available options:

```bash
npx firemyna generate:schedule --help
```
