import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CommentList } from './CommentList'

export default {
	title: 'entities/CommentList',
	component: CommentList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const Normal = Template.bind({})
Normal.args = {
	comments: [
		{
			id: '2',
			text: 'New Comment',
			user: {
				id: '2',
				avatar: '',
				username: 'username'
			}
		},
		{
			id: '1',
			text: 'New Comment 2',
			user: {
				id: '2',
				avatar: '',
				username: 'username2'
			}
		}
	]
}

export const Loading = Template.bind({})
Loading.args = {
	isLoading: true
}
