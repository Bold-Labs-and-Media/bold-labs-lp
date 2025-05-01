// @ts-check
import { defineConfig } from "astro/config";

import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "pt",
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
