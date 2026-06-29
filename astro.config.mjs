// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://suzzastitches.com",
  integrations: [mdx(), sitemap()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Solider",
      cssVariable: "--font-solider",
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/solider/Solide_Mirage-Mono_web.woff2"],
          },
          // ...
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Abordage",
      cssVariable: "--font-abordage",
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/abordage/Abordage-Regular.woff2"],
          },
          // ...
        ],
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
