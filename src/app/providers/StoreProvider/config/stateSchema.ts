import {CounterSchema} from 'entities/Counter'
import {UserSchema} from 'entities/User'
import {LoginSchema} from 'features/AuthByUserName'
import {ToolkitStore} from '@reduxjs/toolkit/dist/configureStore'
import {AnyAction, CombinedState, Reducer, ReducersMapObject} from '@reduxjs/toolkit'
import {ProfileSchema} from 'entities/Profile'
import {AxiosInstance} from 'axios'
import {To} from 'react-router-dom'
import {NavigateOptions} from 'react-router'


export interface StateSchema {
	counter: CounterSchema,
	user: UserSchema,
	//async reducers
	loginForm?: LoginSchema,
	profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
	add: (key: StateSchemaKey, reducer: Reducer) => void
	remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
	reducerManager: ReducerManager
}

export interface ThunkExtraArgs {
	api: AxiosInstance,
	navigate?: (to: To, options?: NavigateOptions) =>  void
}

export interface ThunkConfig<T> {
	rejectValue: T,
	extra: ThunkExtraArgs
}