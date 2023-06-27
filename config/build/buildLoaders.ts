import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BuildOptions} from './types/config'
import {buildBabelLoader} from './loaders/babelLoader'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const {isDev} = options

	const codeBabelLoader = buildBabelLoader({...options, isTsx: false})
	const tsxBabelLoader = buildBabelLoader({...options, isTsx: true})


	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	const svgLoader = {
		test: /\.svg$/,
		use: [{ loader: '@svgr/webpack', options: { dimensions: false }}],

	}

	const styleLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => resPath.includes('.module'),
						localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
					},
				}
			},
			'sass-loader',
		],
	}


	return [
		codeBabelLoader,
		tsxBabelLoader,
		styleLoader,
		svgLoader,
		fileLoader,
	]
}