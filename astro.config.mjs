// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://andressoler.netlify.app",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    // Emits <xhtml:link rel="alternate" hreflang> entries per URL so the
    // sitemap advertises both locales, matching the tags in Layout.astro.
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", es: "es" },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
