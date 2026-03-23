import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest";
import eslint from "eslint";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,test.js}"], plugins: { js, jest, eslint}, extends: ["js/recommended"], languageOptions: { globals: globals.jest}, rules: {
    "quotes": ["error", "double"],
    "indent": ["error", 2],
    "space-infix-ops": ["error", { "int32Hint": false }], 
    "eol-last": ["error", "always"],
    "semi": "error", 
    "prefer-const": "warn"
  } },
]);



