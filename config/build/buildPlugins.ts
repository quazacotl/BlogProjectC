import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import {BuildOptions} from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import CopyPlugin from 'copy-webpack-plugin'
import CDP from 'circular-dependency-plugin'

export function buildPlugins({paths: {html, locales, buildLocales}, isDev, apiUrl, project}: BuildOptions): webpack.WebpackPluginInstance[] {
	const plugins: webpack.WebpackPluginInstance[]  =  [
		new HtmlWebpackPlugin({
			template: html
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			__API__: JSON.stringify(apiUrl),
			__PROJECT__: JSON.stringify(project)
		}),
		new CopyPlugin({
			patterns: [
				{ from: locales, to: buildLocales },
			],
		}),
		new CDP({
			exclude: /node_modules/,
			failOnError: true
		})
	]

	isDev && plugins.push(new BundleAnalyzerPlugin({
		openAnalyzer: false
	}))

	return plugins
}