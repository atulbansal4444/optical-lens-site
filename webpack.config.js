const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
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
			inject: 'body',
			filename: 'index.html',
			template: path.join(__dirname, 'public', 'index.html'),
			chunks: ['src']
		}),
	],
}
