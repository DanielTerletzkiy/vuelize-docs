module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
    "unused-imports",
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    // override/add rules settings here, such as:
    // '@typescript-eslint/no-unused-vars': 'off',
    "@typescript-eslint/ban-ts-comment": 'off',
    "@typescript-eslint/ban-types": 'off',
    "vue/multi-word-component-names": 'off',
    "@typescript-eslint/no-explicit-any": 'off',
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
    ],
    'vue/valid-v-slot': 'off',
  },
};
