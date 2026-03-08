import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,test.js}"], plugins: { js, jest }, extends: ["js/recommended"], languageOptions: { globals: globals.jest} },
]);
