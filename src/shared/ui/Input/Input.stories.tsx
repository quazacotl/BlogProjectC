import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {MemoInput} from './Input'


export default {
	title: 'shared/MemoInput',
	component: MemoInput,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof MemoInput>

const Template: ComponentStory<typeof MemoInput> = (args) => <MemoInput {...args} />

export const Primary = Template.bind({})
Primary.args = {
	placeholder: ' Placeholder Text',
	value: 'sdfqew4t23'
}
