import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import ProfilePage from './ProfilePage'

import {CountryEnum} from '@/entities/Country'
import {Currency} from '@/entities/Currency'
import avatar from '@/shared/assets/test/img.png'
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator'




export default {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />

export const Common = Template.bind({})
Common.args = {}
Common.decorators = [StoreDecorator({
	profile: {
		form: {
			first: 'User',
			lastname: 'Name',
			age: 24,
			currency: Currency.RUB,
			country: CountryEnum.Kazakhstan,
			city: 'Moscow',
			username: 'username',
			avatar: avatar
		}
	}
})]