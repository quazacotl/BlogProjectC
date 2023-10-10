// import React from 'react'
// import { ComponentStory, ComponentMeta } from '@storybook/react'
//
//
// import ArticleRating from './ArticleRating'
// import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator'
//
// export default {
// 	title: 'features/ArticleRating',
// 	component: ArticleRating,
// 	argTypes: {
// 		backgroundColor: { control: 'color' },
// 	},
// 	parameters: {
// 		mockData: [
// 			{
// 				url: `${__API__}/article-ratings?userId=1&articleId=1`,
// 				method: 'GET',
// 				status: 200,
// 				response: [{
// 					rate: 2,
// 				}],
// 			},
// 		],
// 	}
// } as ComponentMeta<typeof ArticleRating>
//
// const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />
//
// export const Normal = Template.bind({})
// Normal.args = {
// 	articleId: '1'
// }
//
// Normal.decorators = [
// 	StoreDecorator({
// 		user: {
// 			authData: {id: '1'}
// 		}
// 	})
// ]
//
//
import type { Meta, StoryObj } from '@storybook/react'

import ArticleRating from './ArticleRating'

const meta: Meta<typeof ArticleRating> = {
	component: ArticleRating,
	title: 'features/ArticleRating',
	// argTypes: {
	// 	backgroundColor: { control: 'color' },
	// },
	parameters: {
		mockData: [
			{
				url: `${__API__}/article-ratings?userId=1&articleId=1`,
				method: 'GET',
				status: 200,
				response: [{
					rate: 2,
				}],
			},
		],
	}
}

export default meta
type Story = StoryObj<typeof ArticleRating>;


export const Primary: Story = {
	render: () => <ArticleRating articleId={'1'}/>,
}
