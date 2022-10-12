/* eslint-disable prettier/prettier */
module.exports = {
  root: true,
  'extends': [
    "plugin:vue/essential",
    "airbnb-base",
    "@vue/eslint-config-typescript",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    semi: 0, 
    "import/no-unresolved": "off", 
    "comma-dangle": "off", 
    "no-new": 0, 
    indent: ["error", 2],
    "import/extensions": "off",
  }
}
