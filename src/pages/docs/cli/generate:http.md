---
layout: "../../../layouts/Docs.astro"
---

# `firemyna generate:http`

Generate an HTTP function:

```bash
npx firemyna generate:http functionName
# Or
npx firemyna g:http functionName
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";

export default functions.https.onRequest((request, response) => {
  response.send("Hi from functionName!");
});
```

[Read more about HTTP functions in the Firebase Documentation →](https://firebase.google.com/docs/functions/http-events)

The available arguments:

- [`--cors`](#--cors) - enable CORS middleware
- [`--cookie`](#--cookie) - enable cookie middleware
- [`--memory`](#--memory) - function memory to set
- [`--region`](#--region) - function region to set
- [`--cwd`](#--cwd) - specify the working directory
- [`--config`](#--config) - specify the config path to use
- [`--help`](#--help) - show help for the command

## `--cors`

You can enable CORS by passing `--cors` argument:

```bash
npx firemyna generate:http functionName --cors
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";
import cors from "cors";

const corsMiddleware = cors({ origin: true });

export default functions.https.onRequest((request, response) =>
  corsMiddleware(request, response, () => {
    response.send("Hi from functionName!");
  })
);
```

Note that you'll need to install the `cors` package manually:

```bash
npm install cors --save
# Install TypeScript definitions:
npm install @types/cors --save-dev
```

## `--cookie`

You can enable cookie parsers by passing `--cookie` argument:

```bash
npx firemyna generate:http functionName --cookie
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";
import cookieParser from "cookie-parser";

const cookieMiddleware = cookieParser();

export default functions.https.onRequest((request, response) =>
  cookieMiddleware(request, response, () => {
    response.send("Hi from functionName!");
  })
);
```

Note that you'll need to install the `cookie-parser` package manually:

```bash
npm install cookie-parser --save
# Install TypeScript definitions:
npm install @types/cookie-parser --save-dev
```

## `--memory`

You can set the Function memory with `--memory` argument:

```bash
npx firemyna generate:http functionName --memory 1GB
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";

export default functions
  .runWith({ memory: "1GB" })
  .https.onRequest((request, response) => {
    response.send("Hi from functionName!");
  });
```

Run `npx firemyna generate:http --help` to learn about the available options.

## `--region`

You can set the Function region with `--region` argument:

```bash
npx firemyna generate:http functionName --region europe-west3
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";

export default functions
  .region("europe-west3")
  .https.onRequest((request, response) => {
    response.send("Hi from functionName!");
  });
```

Run `npx firemyna generate:http --help` to learn about the available options.

## `--cwd`

Use `--cwd` to specify the working directory where to generate the function:

```bash
npx firemyna generate:http functionName --cwd ./apps/website
```

## `--config`

Use `--config` to specify the config path to use:

```bash
npx firemyna generate:http functionName --config ./configs/firemyna.js
```

## `--help`

Use `--help` to learn about the arguments and available options:

```bash
npx firemyna generate:http --help
```
