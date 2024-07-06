import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import swup from "@swup/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://harmonycon.org",
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    tailwind(),
    swup({
      containers: ["#swup"],
      theme: ["overlay", { direction: "to-bottom" }],
      globalInstance: true,
      // animateHistoryBrowsing: true,
    }),
  ],
});
