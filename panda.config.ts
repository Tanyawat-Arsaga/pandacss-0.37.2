import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: [
    "@pandacss/preset-base",
    createPreset({
      accentColor: "cyan",
      grayColor: "neutral",
      borderRadius: "lg",
    }),
  ],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],

  // Files to exclude
  exclude: [],

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "./styled-system",

  lightningcss: true,
});
