import {ReactNode} from 'react'
import {Provider} from 'react-redux'
import {ReducersMapObject} from '@reduxjs/toolkit'
import {createReduxStore} from '../config/store'
import {StateSchema} from '../config/stateSchema'

interface StoreProviderProps {
	children: ReactNode,

	// то, что ниже - для сторибука, чтобы можно было в декораторах указывать начальные значения
	initialState?: DeepPartial<StateSchema>,
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
	const {children, initialState, asyncReducers} = props

	const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>)

	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}