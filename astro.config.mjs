// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://ayushchaugule.online", // your custom domain
  base: "/", // no subpath anymore
  vite: {
    plugins: [tailwindcss()],
  },
});
