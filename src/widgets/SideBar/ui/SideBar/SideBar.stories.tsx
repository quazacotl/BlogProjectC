import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import {SideBar} from './SideBar'

import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator'




export default {
	title: 'widgets/Sidebar',
	component: SideBar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof SideBar>

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />

export const Common = Template.bind({})
Common.args = {}
Common.decorators = [
	StoreDecorator({
		user: {authData: {}}
	})
]

export const NoAuth = Template.bind({})
NoAuth.args = {}
NoAuth.decorators = [
	StoreDecorator({
		user: {}
	})
]
