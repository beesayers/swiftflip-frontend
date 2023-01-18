module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "next/core-web-vitals",
    "prettier",
    "plugin:storybook/recommended",
  ],
  overrides: [
    {
      files: ["*.stories.@(js|jsx|ts|tsx,mjs,cjs)"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react"],
  rules: {
    "storybook/hierarchy-separator": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
