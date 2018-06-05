module.exports = {
  globals: {
    $: true
  },
  extends: "eslint:recommended",
  // required to lint *.vue files
  plugins: ["html"],
  parser: "babel-eslint",
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 6,
    sourceType: "module"
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  rules: {
    "comma-dangle": ["error", "never"],
    "no-console": "warn",
    indent: ["error", 2],
    // "linebreak-style": [
    //     "error",
    //     "windows"
    // ],
    quotes: ["error", "double"],
    semi: "off",
    "no-unused-vars": [
      "error",
      {
        vars: "local",
        args: "none"
      }
    ]
  }
};
