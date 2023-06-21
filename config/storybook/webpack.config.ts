import webpack from 'webpack'
import path from 'path'

const pathToInlineSvg = path.resolve(__dirname, '../../src/shared/assets/icons')
export default ({config}: {config: webpack.Configuration}) => {
	config.resolve!.modules!.push(path.resolve(__dirname, '..', '..', 'src'))
	// config.resolve.extensions.push('.ts', '.tsx')

	//eslint-disable-next-line
	const fileLoaderRule: any = config.module!.rules!.find((rule: any) => rule.test.test('.svg'))
	fileLoaderRule.exclude = pathToInlineSvg

	config.module!.rules!.push({
		test: /\.svg$/,
		include: pathToInlineSvg,
		use: [{
			loader: '@svgr/webpack',
			options: {
				icon: true,
			},
		}],
	})

	config.plugins!.push(new webpack.DefinePlugin({
		__IS_DEV__: true,
		__API__: JSON.stringify('http://api.ru'),
		__PROJECT__: JSON.stringify('storybook')
	}))

	return config
}