import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
{
  files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  plugins: { js },
  extends: [
    "js/recommended",
    "plugin:prettier/recommended"
  ]
},
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
{
  settings: {
    react: {
      version: '999.999.999',
    },
  }
},
{
  files: ['**/*.{js,jsx}'],
  plugins: { 'react-hooks': reactHooks },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  }
},
  {
  'rules': {
  "react/prop-types": "off",
  "react/react-in-jsx-scope": "off",
  "@typescript-eslint/explicit-module-boundary-types": "off"
},
  }
]);