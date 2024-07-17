// eslint-disable-next-line import/no-extraneous-dependencies
import { Linter } from "eslint";
import { FlatCompat } from "@eslint/eslintrc";

// This helper function provides compatibility for older config formats.
const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

export default [
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          modules: true,
          jsx: true,
        },
      },
    },
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "single"],
      semi: ["error", "always"],

    },
  },
  ...compat.extends("eslint:recommended", "plugin:react/recommended"),

];
