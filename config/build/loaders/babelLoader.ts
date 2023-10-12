import {BuildOptions} from '../types/config'
import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin'

interface buildBabelLoaderProps extends BuildOptions {
	isTsx: boolean
}

export function buildBabelLoader({isDev, isTsx}: buildBabelLoaderProps) {
	return  {
		test: isTsx ?  /\.(jsx|tsx)$/ : /\.(js|ts)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				cacheDirectory: true,
				plugins: [
					[
						'@babel/plugin-transform-typescript',
						{
							isTsx
						}
					],
					['@babel/plugin-transform-runtime'],
					isTsx && !isDev && [
						babelRemovePropsPlugin,
						{
							props: ['data-testid']
						}
					]
				].filter(Boolean),
			}
		}
	}
}