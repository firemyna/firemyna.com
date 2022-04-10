---
layout: "../../../layouts/Docs.astro"
---

# Generators

Firemyna provides set of CLI commands that helps to quickly create Firebase Functions of any type, i.e.:

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

See the complete list of commands with its arguments:

- [HTTP function](#http-function)
- [Callable HTTP function](#callable-http-function)

## HTTP function

## Callable HTTP function
