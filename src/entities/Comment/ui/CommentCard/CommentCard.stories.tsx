import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { CommentCard } from './CommentCard'

export default {
	title: 'entities/CommentCard',
	component: CommentCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
	isLoading: false,
	comment: {
		id: '2',
		text: 'some comment',
		user: {
			id: '2',
			avatar: '',
			username: 'username2'
		}
	}
}

export const Loading = Template.bind({})
Loading.args = {
	isLoading: true,
	comment: {
		id: '2',
		text: 'some comment',
		user: {
			id: '2',
			avatar: '',
			username: 'username2'
		}
	}
}
