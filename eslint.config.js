import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import nextPlugin from "eslint-config-next";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
  ...pluginReact.configs.recommended,
  ...nextPlugin,
  languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
