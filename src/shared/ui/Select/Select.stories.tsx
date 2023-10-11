import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import {Select} from './Select'


export default {
	title: 'shared/Select',
	component: Select,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
	label: 'Label',
	options: [
		{value: 'value1', content: 'content1'},
		{value: 'value2', content: 'content2'},
		{value: 'value3', content: 'content3'},
		{value: 'value4', content: 'content4'},
	]
}


