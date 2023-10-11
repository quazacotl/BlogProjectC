import {action} from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Tabs } from './Tabs'

export default {
	title: 'shared/Tabs',
	component: Tabs,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Normal = Template.bind({})
Normal.args = {
	tabs: [
		{
			content: 'tab 1',
			value: 'tab 1',
		},
		{
			content: 'tab 2',
			value: 'tab 2',
		}
	],
	value: 'tab 2',
	onTabClick: action('onTabClick')
}


