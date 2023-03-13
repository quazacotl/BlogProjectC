import React from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {ArticleDetailsPage} from './ArticleDetailsPage'


export default {
	title: 'shared/ArticleDetailsPage',
	component: ArticleDetailsPage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof ArticleDetailsPage>

const Template: ComponentStory<typeof articledetailspage> = (args) => <ArticleDetailsPage {...args} />

export const Common = Template.bind({})
Common.args = {}
