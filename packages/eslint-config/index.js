module.exports = {
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['jsdoc'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    // prettier
    'prettier/prettier': [
      'error',
      { trailingComma: 'all', singleQuote: true, parser: 'typescript' },
    ],

    // typescript
    '@typescript-eslint/ban-ts-ignore': 'warn',
    '@typescript-eslint/no-useless-constructor': 'error',
    // '@typescript-eslint/no-object-literal-type-assertion': 'off', // both are on (this and angle-bracket) ...so turn one off or you can never assert
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowTypedFunctionExpressions: true, allowExpressions: true },
    ],
    '@typescript-eslint/promise-function-async': 'warn',
    // '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    '@typescript-eslint/no-use-before-define': ['error', { 'functions': false }],
    '@typescript-eslint/no-empty-function': ['error', {'allow': [ 'arrowFunctions' ] }],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',

    // node
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',

    /*
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'src/test/!**!/!*',
          '**!/!*.test.ts*',
          '**!/!*.stories.ts',
        ],
      },
    ],
    */

    'import/extensions': ['error', {
      '.ts': 'never',
      '.js': 'never',
    }],

    'jsdoc/require-jsdoc': [
      'off',
      {
        publicOnly: true,
        require: {
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
        },
      },
    ],

    'no-console': 'error', // use a logger!
    'no-shadow': ['error', { allow: ['_'] }],
    'no-nested-ternary': 'warn',
  },
};
