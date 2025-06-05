// @ts-check

import node from "@astrojs/node";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  trailingSlash: "ignore",
  output: "server",
  adapter:
    process.env.NODE_ENV === "production"
      ? vercel({
          imageService: true,
          devImageService: "sharp",
          skewProtection: true,
        })
      : node({
          mode: "standalone",
        }),

  env: {
    schema: {
      PUBLIC_APP_NAME: envField.string({
        access: "public",
        context: "client",
      }),

      PUBLIC_APP_URL: envField.string({
        access: "public",
        context: "client",
        url: true,
      }),

      BETTER_AUTH_SECRET: envField.string({
        access: "secret",
        context: "server",
      }),

      BETTER_AUTH_URL: envField.string({
        access: "secret",
        context: "server",
        url: true,
      }),

      WHITELISTED_URLS: envField.string({
        access: "secret",
        context: "server",
      }),

      DATABASE_URL: envField.string({
        access: "secret",
        context: "server",
        url: true,
      }),

      GITHUB_CLIENT_ID: envField.string({
        access: "secret",
        context: "server",
      }),
      GITHUB_CLIENT_SECRET: envField.string({
        access: "secret",
        context: "server",
      }),

      GOOGLE_CLIENT_ID: envField.string({
        access: "secret",
        context: "server",
      }),
      GOOGLE_CLIENT_SECRET: envField.string({
        access: "secret",
        context: "server",
      }),

      DISCORD_CLIENT_ID: envField.string({
        access: "secret",
        context: "server",
      }),
      DISCORD_CLIENT_SECRET: envField.string({
        access: "secret",
        context: "server",
      }),
    },
    validateSecrets: true,
  },
});
