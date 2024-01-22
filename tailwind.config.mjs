import catppuccin from "@catppuccin/tailwindcss";
import typography from "@tailwindcss/typography";

const linkColor = "blue";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.text.DEFAULT"),
            "--tw-prose-headings": theme(`colors.text.DEFAULT`),
            "--tw-prose-lead": theme("colors.text.DEFAULT"),
            "--tw-prose-links": theme(`colors.${linkColor}.DEFAULT`),
            "--tw-prose-bold": theme(`colors.text.DEFAULT`),
            "--tw-prose-counters": theme(`colors.subtext1.DEFAULT`),
            "--tw-prose-bullets": theme(`colors.subtext1.DEFAULT`),
            "--tw-prose-hr": theme(`colors.overlay1.DEFAULT`),
            "--tw-prose-quotes": theme(`colors.text.DEFAULT`),
            "--tw-prose-quote-borders": theme(`colors.subtext0.DEFAULT`),
            "--tw-prose-captions": theme(`colors.subtext0.DEFAULT`),
            "--tw-prose-code": theme(`colors.subtext0.DEFAULT`),
            "--tw-prose-pre-code": theme(`colors.subtext0.DEFAULT`),
            "--tw-prose-pre-bg": theme(`colors.mantle.DEFAULT`),
            "--tw-prose-th-borders": theme(`colors.surface1.DEFAULT`),
            "--tw-prose-td-borders": theme(`colors.surface0.DEFAULT`),
          },
        },
      }),
    },
  },
  plugins: [catppuccin, typography],
};
