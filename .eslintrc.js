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
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/prop-types': 'error',
		'space-before-function-paren': [
			'error',
			{
				'anonymous': 'never',
				'named': 'never',
				'asyncArrow': 'always'
			}
		],
		'quotes': ['error', 'single'],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'indent': [
			'error', 'tab'
		]
	},
};
