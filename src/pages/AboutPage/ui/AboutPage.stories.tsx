import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import AboutPage from './AboutPage'




export default {
	title: 'pages/AboutPage',
	component: AboutPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />

export const Common = Template.bind({})
Common.args = {}