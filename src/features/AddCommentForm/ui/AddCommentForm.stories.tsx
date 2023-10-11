import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {action} from '@storybook/addon-actions'
import AddCommentForm from './AddCommentForm'
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator'




export default {
	title: 'features/AddCommentForm',
	component: AddCommentForm,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AddCommentForm>

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />

export const Common = Template.bind({})
Common.args = {
	handleSendComment: action('onSendComment')
}
Common.decorators = [StoreDecorator({})]

