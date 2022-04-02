import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  dist: "./dist/production/hosting",
  integrations: [tailwind()]
});