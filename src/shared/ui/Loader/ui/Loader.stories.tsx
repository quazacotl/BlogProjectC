import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import {Loader} from './Loader'




export default {
	title: 'widgets/Loader',
	component: Loader,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Common = Template.bind({})
Common.args = {}