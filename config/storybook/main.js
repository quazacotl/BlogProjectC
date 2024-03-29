module.exports = {
	'stories': ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
	'addons': ['@storybook/addon-links',
		'@storybook/addon-essentials',
		{
			name: '@storybook/addon-interactions',
			options: {
				backgrounds: false
			}
		},

		'@storybook/preset-scss',
		'storybook-addon-mock'
	],
	'framework': {
		name: '@storybook/react-webpack5',
		options: {
			builder: {
				fsCache: true
			},
			fastRefresh: true,
		}
	},
	staticDirs: ['../../public'],
	docs: {
		autodocs: true
	}
}