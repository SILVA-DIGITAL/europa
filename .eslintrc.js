const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
)

module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  globals: {
    document: false,
    root: false,
    window: false,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'airbnb',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      globalReturn: true,
      impliedStrict: true,
      jsx: true,
      arrowFunction: true,
    },
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'prettier/prettier': ['error', prettierOptions],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'arrow-parens': ['error', 'as-needed'],
    'no-return-assign': 'off',
    'react/jsx-props-no-spreading': 'off',
    'object-curly-newline': 'off',
    semi: ['error', 'never'],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
}
