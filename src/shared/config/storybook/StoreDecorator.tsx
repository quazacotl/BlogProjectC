import {Story} from '@storybook/react'
import {StateSchema, StoreProvider} from 'app/providers/StoreProvider'
import {loginReducer} from 'features/AuthByUserName'
import {profileReducer} from 'entities/Profile'
import {ReducerList} from 'shared/lib/hooks/useAddReducer'


const defaultAsyncReducers: ReducerList = {
	loginForm: loginReducer,
	profile: profileReducer
}


// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) => (Story: Story) => (
	<StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
		<Story />
	</StoreProvider>
)