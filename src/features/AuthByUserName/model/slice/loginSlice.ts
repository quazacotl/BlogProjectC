import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {loginByUserName} from '../../model/services/loginByUserName/loginByUserName'
import {LoginSchema} from '../types/loginSchema'


const initialState: LoginSchema = {
	password: '',
	username: '',
	isLoading: false,
	error: ''
}

export const loginSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserName: (state, action: PayloadAction<string>) => {
			state.username = action.payload
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginByUserName.pending, (state) => {
				state.error = ''
				state.isLoading = true
			})
			.addCase(loginByUserName.fulfilled, (state) => {
				state.isLoading = false
			})
			.addCase(loginByUserName.rejected, (state, action) => {
				state.error = action.payload || ''
				state.isLoading = false
			})
	},
})


export const { actions: loginActions } = loginSlice
export const {reducer: loginReducer} = loginSlice