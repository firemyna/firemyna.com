---
layout: "../../../layouts/Docs.astro"
---

# Developing Firebase apps with Firemyna

## How it works

The main thing you have to learn to be productive with Firemyna is how the Functions are structured. Unlike the client side of your project (if you have any), which is flexible and depends on the preset or configuration, Firemyna expects certain things from your Functions source code and its structure. It also [slightly differs from regular Firebase Functions projects](#firemyna-vs-regular-firebase-functions-project).

Luckily, the expectations are pretty straightforward:

1. Function files should be located in the functions source directory (`src/functions/functionName.ts`) or own module directory (`src/functions/functionName/index.ts`:).
2. Each function should export a valid Firebase Function as the default export (`export default`).

_The functions source location (`src/functions` in the examples) is defined by the preset or [`functionsPath`] configuration option._

## Firemyna VS regular Firebase Functions project

## Creating functions

To add a Firebase Function to the project, you need to create a file in the functions source directory that exports a function as the default.

The easiest way to create a Function, is to use [`firemyna generate`] command, i.e.:

```bash
npx firemyna generate:http functionName
```

Which will generate a file `src/functions/functionName.ts`:

```ts
import * as functions from "firebase-functions";

export default functions.https.onRequest((request, response) => {
  response.send("Hi from functionName!");
});
```

## Shared init file

Firemyna allows specifying shared init files that will always be included before functions, allowing you to initialize the application.

## Configuration

---

[Deploying Firebase apps with Firemyna →](/docs/ship)

[`functionspath`]: /docs/start/configuration#functionspath
[`firemyna generate`]: /docs/develop/generators
