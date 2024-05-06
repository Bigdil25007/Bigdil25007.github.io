import { fileURLToPath } from "url";
import path from "path";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "eslint-plugin-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default {
  rules: {
    "no-unused-vars": "warn",
    "no-undef": "warn",
  },
  globals: {
    ...globals.browser,
    ...globals.node,
  },
  extends: [
    "standard",
    ...compat.extends("standard"),
    ...pluginVue.configs["flat/essential"],
  ],
};
