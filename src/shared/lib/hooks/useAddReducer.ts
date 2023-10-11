import {useEffect} from 'react'
import {useDispatch, useStore} from 'react-redux'
import {ReduxStoreWithManager, StateSchema} from '@/app/providers/StoreProvider'
// eslint-disable-next-line fsd-imports/layer-imports
import {StateSchemaKey} from '@/app/providers/StoreProvider/config/stateSchema'
import {Reducer} from '@reduxjs/toolkit'


export type ReducerList = {
	[name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}


export const useAddReducer = (reducers: ReducerList, removeAfterUnmount = true) => {
	const store = useStore() as ReduxStoreWithManager
	const dispatch = useDispatch()

	useEffect(() => {
		const mountedReducers = store.reducerManager.getReducerMap()

		Object.entries(reducers).forEach(([name, reducer]) => {
			const mounted = mountedReducers[name as StateSchemaKey]

			if (!mounted) {
				store.reducerManager.add(name as StateSchemaKey, reducer)
				dispatch({type: `@INIT ${name}Reducer`})
			}
		})

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name, ]) => {
					store.reducerManager.remove(name as StateSchemaKey)
					dispatch({type: `@DESTROY ${name}Reducer`})
				})
			}
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
}