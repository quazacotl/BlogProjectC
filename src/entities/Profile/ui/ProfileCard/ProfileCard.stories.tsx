import {ComponentMeta, ComponentStory} from '@storybook/react'
import React from 'react'

import {ProfileCard} from './ProfileCard'

import {CountryEnum} from '@/entities/Country'
import {Currency} from '@/entities/Currency'


export default {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Common = Template.bind({})
Common.args = {
	data: {
		first: 'User',
		lastname: 'Name',
		age: 24,
		currency: Currency.RUB,
		country: CountryEnum.Kazakhstan,
		city: 'Moscow',
		username: 'username',
		avatar: 'https://raw.githubusercontent.com/antonmc/minifig/HEAD/output.svg?sanitize=true'
	}
}

export const WithError = Template.bind({})
WithError.args = {
	error: 'error'
}

export const WithLoading = Template.bind({})
WithLoading.args = {
	isLoading: true
}