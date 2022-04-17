---
layout: "../../../layouts/Docs.astro"
---

# `firemyna generate:express`

Generate an Express function:

```bash
npx firemyna generate:express functionName
# Or
npx firemyna g:express functionName
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";
import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("Hi from functionName!");
});

export default functions.https.onRequest(app);
```

Note that you'll need to install the `express` package manually:

```bash
npm install express --save
# Install TypeScript definitions:
npm install @types/express --save-dev
```

[Read more about using Express to build HTTP functions in the Firebase Documentation →](https://firebase.google.com/docs/functions/http-events#using_existing_express_apps)

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
npx firemyna generate:express functionName --cors
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: true }));

app.get("/", (request, response) => {
  response.send("Hi from functionName!");
});

export default functions.https.onRequest(app);
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
npx firemyna generate:express functionName --cookie
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";
import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

app.get("/", (request, response) => {
  response.send("Hi from functionName!");
});

export default functions.https.onRequest(app);
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
npx firemyna generate:express functionName --memory 1GB
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";
import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("Hi from functionName!");
});

export default functions.runWith({ memory: "1GB" }).https.onRequest(app);
```

Run `npx firemyna generate:express --help` to learn about the available options.

## `--region`

You can set the Function region with `--region` argument:

```bash
npx firemyna generate:express functionName --region europe-west3
```

An example of the generated function:

```ts
import * as functions from "firebase-functions";
import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("Hi from functionName!");
});

export default functions.region("europe-west3").https.onRequest(app);
```

Run `npx firemyna generate:express --help` to learn about the available options.

## `--cwd`

Use `--cwd` to specify the working directory:

```bash
npx firemyna generate:express functionName --cwd ./apps/website
```

## `--config`

Use `--config` to specify the config path to use:

```bash
npx firemyna generate:express functionName --config ./configs/firemyna.js
```

## `--help`

Use `--help` to learn about the arguments and available options:

```bash
npx firemyna generate:express --help
```
