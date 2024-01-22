import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import ctpLatte from "@catppuccin/vscode/themes/latte.json";
import ctpMacchiato from "@catppuccin/vscode/themes/macchiato.json";
import icon from "astro-icon";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://skye.vg",
  markdown: {
    shikiConfig: {
      experimentalThemes: {
        light: ctpLatte,
        dark: ctpMacchiato
      }
    }
  },
  integrations: [tailwind(), icon(), compress()]
});