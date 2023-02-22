import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from './stateSchema'
import {CounterReducer} from 'entities/Counter'
import {userReducer} from 'entities/User'

export function createReduxStore(initialState?: StateSchema) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		counter: CounterReducer,
		user: userReducer
	}

	return configureStore<StateSchema>({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState
	})
}
