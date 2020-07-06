module.exports = {
  extends: "@mgilbride",
  parserOptions: {
    project: "tsconfig.json",
  },
  env: {
    jest: true
  },
  rules: {
    'no-new': 'off',
    'no-console': 'warn'
  }
}
