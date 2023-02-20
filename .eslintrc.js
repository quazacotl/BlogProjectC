module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		jest: true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:i18next/recommended',
	],
	'overrides': [
		{
			files: ['**/src/**/*.test.{ts,tsx}', './config/storybook/**/*'],
			rules: {
				'i18next/no-literal-string': 0,
				'no-undef': 0
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint',
		'i18next',
		'react-hooks'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'react/react-in-jsx-scope': 0,
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "error"
	},
	'settings': {
		'react': {
			'version': 'detect'
		}
	},
}