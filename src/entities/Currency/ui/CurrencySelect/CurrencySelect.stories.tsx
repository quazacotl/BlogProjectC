import {ComponentMeta, ComponentStory} from '@storybook/react'
import React from 'react'

import {CurrencySelect} from './CurrencySelect'


export default {
	title: 'entities/CurrencySelect',
	component: CurrencySelect,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />

export const Common = Template.bind({})
Common.args = {}