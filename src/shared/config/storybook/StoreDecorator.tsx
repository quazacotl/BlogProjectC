import {Story} from '@storybook/react'
import {DeepPartial} from '@reduxjs/toolkit'
import {StateSchema, StoreProvider} from 'app/providers/StoreProvider'

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: Story) => (
	<StoreProvider initialState={state}>
		<Story />
	</StoreProvider>
)