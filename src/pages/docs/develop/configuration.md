---
layout: "../../../layouts/Docs.astro"
---

# Firemyna configration

Firemyna reads project configuration from `firemyna.config.ts` or `firemyna.config.js` in the project directory, which might look something like that:

```ts
import type { FiremynaConfig } from "firemyna";

export const config: FiremynaConfig = {
  preset: "astro",
};
```

Or like that if you prefer JavaScript:

```js
export const config = {
  preset: "astro",
};
```

## Reference

### `preset`

### `functionsPath`
