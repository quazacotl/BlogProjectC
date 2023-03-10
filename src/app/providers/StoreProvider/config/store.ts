import {CombinedState, configureStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from './stateSchema'
import {CounterReducer} from 'entities/Counter'
import {userReducer} from 'entities/User'
import {createReducerManager} from 'app/providers/StoreProvider/config/reducerManager'
import {$api} from 'shared/api/api'
import {NavigateOptions} from 'react-router'
import {To} from 'react-router-dom'

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
	navigate?: (to: To, options?: NavigateOptions) =>  void
) {
	const rootReducer: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: CounterReducer,
		user: userReducer,
	}


	const reducerManager = createReducerManager(rootReducer)

	const store = configureStore({
	
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware({
			thunk: {
				extraArgument: {
					api: $api,
					navigate
				}
			}
		})
	})

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	store.reducerManager = reducerManager

	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
