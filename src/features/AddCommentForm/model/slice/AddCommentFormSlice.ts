import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AddCommentFormSchema} from '../types/addCommentForm'


const initialState: AddCommentFormSchema = {
	text: '',
	error: ''
}

export const addCommentFormSlice = createSlice({
	name: 'addCommentForm',
	initialState,
	reducers: {
		setText: (state, action: PayloadAction<string>) => {
			state.text = action.payload
		},
		setError: (state, action: PayloadAction<string>) => {
			state.error = action.payload
		}
	},
	// extraReducers: (builder) => {
	// 	builder
	// 		.addCase(loginByUserName.pending, (state) => {
	// 			state.error = ''
	// 			state.isLoading = true
	// 		})
	// 		.addCase(loginByUserName.fulfilled, (state) => {
	// 			state.isLoading = false
	// 		})
	// 		.addCase(loginByUserName.rejected, (state, action) => {
	// 			state.error = action.payload || ''
	// 			state.isLoading = false
	// 		})
	// },
})


export const { actions: addCommentFormActions } = addCommentFormSlice
export const {reducer: addCommentFormReducer} = addCommentFormSlice