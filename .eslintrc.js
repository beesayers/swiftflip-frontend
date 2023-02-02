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
    "next",
  ],
  overrides: [
    {
      files: ["*.stories.@(js|jsx|ts|tsx,mjs,cjs)"],
      rules: {
        "storybook/hierarchy-separator": "error",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
