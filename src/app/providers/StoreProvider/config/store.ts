import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from './stateSchema'
import {CounterReducer} from 'entities/Counter'
import {userReducer} from 'entities/User'
import {createReducerManager} from 'app/providers/StoreProvider/config/reducerManager'

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: CounterReducer,
		user: userReducer,

	}

	const reducerManager = createReducerManager(rootReducer)

	const store = configureStore<StateSchema>({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState
	})

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	store.reducerManager = reducerManager

	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']