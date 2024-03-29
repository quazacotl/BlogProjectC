import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {fetchProfileData} from '../services/fetchProfileData/fetchProfileData'
import {updateProfileData} from '../services/updateProfileData/updateProfileData'
import {ProfileSchema} from '../types/profile'

import {Profile} from '@/entities/Profile'

const initialState: ProfileSchema = {
	data: undefined,
	form: undefined,
	error: undefined,
	isLoading: false,
	readonly: true
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setReadOnly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload
		},
		updateProfile: (state, action: PayloadAction<Profile>) => {
			state.validateError = undefined
			state.form = {
				...state.form,
				...action.payload
			}
		},
		cancelEdit: (state) => {
			state.validateError = undefined
			state.readonly = true
			state.form = state.data
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false
				state.data = action.payload
				state.form = action.payload
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.error = action.payload
				state.isLoading = false
			})

			.addCase(updateProfileData.pending, (state) => {
				state.validateError = undefined
				state.isLoading = true
			})
			.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false
				state.data = action.payload
				state.form = action.payload
				state.readonly = true
			})
			.addCase(updateProfileData.rejected, (state, action) => {
				state.validateError = action.payload
				state.isLoading = false
			})
	},

})

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice
export const {reducer: profileReducer} = profileSlice