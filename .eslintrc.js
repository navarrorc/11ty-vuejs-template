module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  rules: {
    "no-console": "off",
    indent: ["error", 2],
    // "linebreak-style": [
    //     "error",
    //     "windows"
    // ],
    quotes: ["error", "double"],
    semi: "off"
  }
};
