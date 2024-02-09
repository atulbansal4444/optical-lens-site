/* eslint-disable no-undef */
module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		ecmaVersions: 'latest',
		sourceType: 'module',
		ecmaFeature: {
			jsx: true,
			modules: true,
			experimentalObjectRestSpread: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: ['react'],
	rules: {
		'no-console': 'error',
		quotes: ['error', 'single'],
		'indent': [
			'error', 'tab'
		]
	},
};
