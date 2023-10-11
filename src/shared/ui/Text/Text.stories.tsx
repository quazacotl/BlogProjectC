import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import {Text, TextSize, TextTheme} from './Text'


export default {
	title: 'shared/Text',
	component: Text,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
	title: 'Title',
	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
}

export const TextOnly = Template.bind({})
TextOnly.args = {
	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
}

export const TitleOnly = Template.bind({})
TitleOnly.args = {
	title: 'Title',
}

export const Error = Template.bind({})
Error.args = {
	title: 'Title',
	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
	theme: TextTheme.ERROR
}

export const SizeL = Template.bind({})
SizeL.args = {
	title: 'Title lorem ipsun',
	text: 'Description Description Description Description',
	size: TextSize.L,
}
