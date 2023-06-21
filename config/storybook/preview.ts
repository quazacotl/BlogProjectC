import {StyleDecorator} from 'shared/config/storybook/StyleDecorator'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {RouterDecorator} from 'shared/config/storybook/RouterDecorator'
import {Preview} from "@storybook/react";
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'



// export const parameters = {
// 	actions: { argTypesRegex: '^on[A-Z].*' },
// 	controls: {
// 		matchers: {
// 			color: /(background|color)$/i,
// 			date: /Date$/,
// 		},
// 	},
// 	themes: {
// 		default: 'normal',
// 		list: [
// 			{ name: 'normal', class: 'normal', color: '#c8c8c8' },
// 			{ name: 'dark', class: 'dark', color: '#404142' },
// 			{ name: 'orange', class: 'orange', color: '#cb731a' }
// 		],
// 		target: '.app'
// 	},
// }

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'light',
		},
		actions: {argTypesRegex: '^on[A-Z].*'},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [StyleDecorator, ThemeDecorator, RouterDecorator, StoreDecorator({})]
}

export default preview


