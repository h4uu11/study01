/* eslint-disable prettier/prettier */
module.exports = {
   root: true,
   extends: ["plugin:vue/essential", "airbnb-base", "@vue/eslint-config-typescript", "plugin:prettier/recommended"],
   parserOptions: {
      ecmaVersion: "latest",
   },
   rules: {
      "prettier/prettier": [
         "error",
         {
            endOfLine: "auto",
         },
      ],
      "vue/no-multiple-template-root": [],
      "vue/multi-word-component-names": [
         "error",
         {
            ignores: ["Login"],
         },
      ],
      semi: 0,
      "import/no-unresolved": "off",
      "comma-dangle": "off",
      "no-new": 0,
      indent: "off",
      "import/extensions": "off",
   },
}
