import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest";
import eslint from 'eslint';

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,test.js}"], plugins: { js, jest, eslint}, extends: ["js/recommended"], languageOptions: { globals: globals.jest}, rules: {
      "semi": "error", 
      "prefer-const": "warn", 
    } },
]);



