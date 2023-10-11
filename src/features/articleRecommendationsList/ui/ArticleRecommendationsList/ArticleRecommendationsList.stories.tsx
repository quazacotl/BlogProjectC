import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { ArticleRecommendationsList } from './ArticleRecommendationsList'

const articles = [
	{
		'id': '1',
		'title': 'Javascript news СВЕЖАЯ',
		'subtitle': 'Что нового в JS за 2022 год?',
		'img': '',
		'views': 1022,
		'createdAt': '26.04.2022',
		'userId': '1',
		'type': [
			'IT'
		],
		'blocks': []
	},
	{
		'id': '2',
		'title': 'Javascript news СВЕЖАЯ',
		'subtitle': 'Что нового в JS за 2022 год?',
		'img': '',
		'views': 1022,
		'createdAt': '26.04.2022',
		'userId': '1',
		'type': [
			'IT'
		],
		'blocks': []
	},
	{
		'id': '3',
		'title': 'Javascript news СВЕЖАЯ',
		'subtitle': 'Что нового в JS за 2022 год?',
		'img': '',
		'views': 1022,
		'createdAt': '26.04.2022',
		'userId': '1',
		'type': [
			'IT'
		],
		'blocks': []
	}
]

export default {
	title: 'features/ArticleRecommendationsList',
	component: ArticleRecommendationsList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	parameters: {
		mockData: [
			{
				url: `${__API__}/articles?_limit=3`,
				method: 'GET',
				status: 200,
				response: articles,
			},
		],
	}
} as ComponentMeta<typeof ArticleRecommendationsList>

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />

export const Normal = Template.bind({})
Normal.args = {
   
}