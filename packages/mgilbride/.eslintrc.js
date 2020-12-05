module.exports = {
  extends: ["@mgilbride", "plugin:react/recommended", "plugin:jsx-a11y/recommended"],
  env: {
    browser: true,
  },
  plugins: ['jsdoc', 'react-hooks'],
  parserOptions: {
    project: "tsconfig.json",
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '.storybook/**',
          'src/**/*.stories.tsx',
        ],
      },
    ],
    // react
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-no-bind': 'error',
    'react/prop-types': 'off',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    'jsx-a11y/no-onchange': 'off', // https://github.com/mozilla/ensemble/issues/67
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        controlComponents: ['Field', 'InputField'],
      },
    ],
  },
  overrides: [
    {
      files: ['src/**/*.stories.tsx'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ]
}
