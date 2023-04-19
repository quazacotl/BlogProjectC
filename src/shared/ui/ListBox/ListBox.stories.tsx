import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ListBox } from './ListBox'

export default {
	title: 'shared/ListBox',
	component: ListBox,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

export const Normal = Template.bind({})
Normal.args = {
	items: [
		{
			value: 'adgasdfa',
			content: 'adgasdfa'
		},
		{
			value: 'jsfDzg',
			content: 'jsfDzg'
		},
		{
			value: 'oldxgbhzdf',
			content: 'oldxgbhzdf'
		},
		{
			value: 'iofvadfx',
			content: 'iofvadfx'
		}
	],
	label: 'label',

}
