import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  integrations: [react()],
  output: "hybrid",
});
