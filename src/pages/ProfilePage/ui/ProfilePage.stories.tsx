import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProfilePage from './ProfilePage'
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator'
import {Currency} from '@/entities/Currency'
import {Country} from '@/entities/Country'
import avatar from '@/shared/assets/test/img.png'




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
			country: Country.Kazakhstan,
			city: 'Moscow',
			username: 'username',
			avatar: avatar
		}
	}
})]