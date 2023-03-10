import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BuildOptions} from './types/config'

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

	const babelLoader = {
		test: /\.(js|jsx|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [
					[
						'i18next-extract',
						{
							locales: ['en', 'ru'],
							keyAsDefaultValue: false,
							saveMissing: true,
							outputPath: 'public/locales/{{locale}}/{{ns}}.json',
						},
					],
				],
			}
		}
	}

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

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [
		babelLoader,
		typescriptLoader,
		styleLoader,
		svgLoader,
		fileLoader,
	]
}