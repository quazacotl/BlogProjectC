module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    jest: true
  },
  'extends': ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
  'overrides': [{
    files: ['**/src/**/*.test.{ts,tsx}', './config/storybook/**/*'],
    rules: {
      'i18next/no-literal-string': 0,
      'no-undef': 0
    }
  }],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': ['react', '@typescript-eslint', 'i18next', 'react-hooks', 'eslint-plugin-fsd-imports'],
  'rules': {
    'indent': ['error', 'tab'],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'react/react-in-jsx-scope': 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "fsd-imports/path-checker": ['error', {alias: '@'}],
    "fsd-imports/public-api-imports": ['error', {
      alias: '@',
      testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'],
      ignoreImportPatterns: ['**/stateSchema']
    }],
    "fsd-imports/layer-imports": ['error', {
      alias: '@',
      ignoreImportPatterns: ['**/StoreProvider', '**/testing']
    }]
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
};