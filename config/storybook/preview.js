import {addDecorator} from '@storybook/react'
import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator'
import {ThemeDecorator} from '../../src/shared/config/storybook/ThemeDecorator'
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator'


addDecorator(StyleDecorator)
addDecorator(ThemeDecorator)
addDecorator(RouterDecorator)

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		}, 
	},
	themes: {
		default: 'normal',
		list: [
			{ name: 'normal', class: 'normal', color: '#c8c8c8' },
			{ name: 'dark', class: 'dark', color: '#404142' },
			{ name: 'orange', class: 'orange', color: '#cb731a' }
		],
		target: '.app'
	},
}


