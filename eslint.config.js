const js = require("@eslint/js");
const reactHooks = require("eslint-plugin-react-hooks");
const reactRefresh = require("eslint-plugin-react-refresh");
const globals = require("globals");

module.exports = {
  ignorePatterns: ["dist"],
  extends: [
    "eslint:recommended", // tương đương js.configs.recommended
  ],
  plugins: ["react-hooks", "react-refresh"],
  env: {
    browser: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  overrides: [
    {
      files: ["**/*.js", "**/*.jsx"],
      rules: {
        ...reactHooks.configs.recommended.rules,
        "no-fallthrough": ["error", { commentPattern: "break\\s*omitted" }],
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],
      },
    },
  ],
};
