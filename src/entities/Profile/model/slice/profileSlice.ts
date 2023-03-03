import { createSlice } from '@reduxjs/toolkit'
import {ProfileSchema} from '../types/profile'

const initialState: ProfileSchema = {
	data: undefined,
	error: undefined,
	isLoading: false,
	readonly: true
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {

	},
})

// Action creators are generated for each case reducer function
export const { actions: ProfileActions } = profileSlice
export const {reducer: ProfileReducer} = profileSlice