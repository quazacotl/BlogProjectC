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
  'plugins': ['react', 'import', '@typescript-eslint', 'i18next', 'react-hooks', 'eslint-plugin-fsd-imports', 'unused-imports'],
  'rules': {
    'import/order': 'warn',
    "@typescript-eslint/no-explicit-any": "warn",
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
    }],
    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
    ]
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
};