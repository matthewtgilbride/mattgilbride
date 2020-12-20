module.exports = {
  extends: "@mattgilbride",
  parserOptions: {
    project: "tsconfig.json",
  },
  env: {
    jest: true
  },
  rules: {
    'no-new': 'off',
    'no-console': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'off'
  }
}
