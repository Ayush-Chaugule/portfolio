// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://ayushchaugule.online",
  base: "/", // since it's now at root of your domain
  vite: {
    plugins: [tailwindcss()],
  },
});
