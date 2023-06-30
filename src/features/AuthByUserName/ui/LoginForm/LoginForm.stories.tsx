import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MemoLoginForm from './LoginForm'
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator'


export default {
	title: 'features/LoginForm',
	component: MemoLoginForm,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof MemoLoginForm>

const Template: ComponentStory<typeof MemoLoginForm> = (args) => <MemoLoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({
	loginForm: {username: 'username', password: 'password'}
})]

export const WithError = Template.bind({})
WithError.args = {}
WithError.decorators = [StoreDecorator({
	loginForm: {username: 'username', password: 'password', error: 'error'}
})]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [StoreDecorator({
	loginForm: {username: 'username', password: 'password', isLoading: true}
})]