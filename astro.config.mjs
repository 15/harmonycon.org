import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import swup from "@swup/astro";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://harmonycon.org",
  prefetch: {
    prefetchAll: true
  },
  integrations: [tailwind(), swup({
    containers: ["#swup"],
    theme: ["overlay", {
      direction: "to-bottom"
    }],
    // cache: false,
    preload: {
      hover: true,
      visible: true
    },
    globalInstance: true,
    smoothScrolling: false
    // animateHistoryBrowsing: true,
  }), icon(), partytown(), sitemap()]
});