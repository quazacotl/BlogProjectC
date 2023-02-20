import { configureStore } from '@reduxjs/toolkit'
import {StateSchema} from './stateSchema'
import {CounterReducer} from 'entities/Counter'

export function createReduxStore(initialState?: StateSchema) {
	return configureStore<StateSchema>({
		reducer: {
			counter: CounterReducer,
		},
		devTools: __IS_DEV__,
		preloadedState: initialState
	})
}
