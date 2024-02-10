const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist')
	},
	stats: {
		colors: true,
		modules: true,
		reasons: true,
		errorDetails: true
	},
	mode: 'development',
	target: 'web',
	watch: true,
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
					},
				},
			},
			{
				test: /\.(sass|scss|css)$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jp(e*)g|svg|gif)$/,
				use: ['file-loader'],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './public/index.html')
		})
	],
}
