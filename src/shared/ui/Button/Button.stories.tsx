import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {Button, ButtonSize, ButtonTheme} from './Button'


export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	children: 'Text',
}

export const Clear = Template.bind({})
Clear.args = {
	children: 'Text',
	theme: ButtonTheme.CLEAR
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
	children: 'Text',
	theme: ButtonTheme.CLEAR_INVERTED
}

export const Outlined = Template.bind({})
Outlined.args = {
	children: 'Text',
	theme: ButtonTheme.OUTLINED,
	size: ButtonSize.M
}

export const OutlinedSizeL = Template.bind({})
OutlinedSizeL.args = {
	children: 'Text',
	theme: ButtonTheme.OUTLINED,
	size: ButtonSize.L
}

export const OutlinedSizeXL = Template.bind({})
OutlinedSizeXL.args = {
	children: 'Text',
	theme: ButtonTheme.OUTLINED,
	size: ButtonSize.XL
}

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
	children: 'Text',
	theme: ButtonTheme.BACKGROUND
}

export const InvertedBackgroundTheme = Template.bind({})
InvertedBackgroundTheme.args = {
	children: 'Text',
	theme: ButtonTheme.BACKGROUND_INVERTED
}

export const Square = Template.bind({})
Square.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.M
}


export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.L
}

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.XL
}
