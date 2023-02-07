import {BuildOptions} from './types/config'
import webpack from 'webpack'
import {buildPlugins} from './buildPlugins'
import {buildLoaders} from './buildLoaders'
import {buildResolvers} from './buildResolvers'
import {buildDevServer} from './buildDevServer'


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const {paths: {entry, build}, mode, isDev} = options
	return {
		mode,
		entry,
		output: {
			path: build,
			filename: '[name].[contenthash].js',
			clean: true
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		devtool: isDev ?  'inline-source-map' : undefined,
		devServer: isDev ?  buildDevServer(options) : undefined
	}
}