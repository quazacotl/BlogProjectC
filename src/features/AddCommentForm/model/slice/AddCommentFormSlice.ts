import { PayloadAction} from '@reduxjs/toolkit'

import {AddCommentFormSchema} from '../types/addCommentForm'

import {buildSlice} from '@/shared/lib/store/index'


const initialState: AddCommentFormSchema = {
	text: '',
	error: ''
}

export const addCommentFormSlice = buildSlice({
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
})


export const { actions: addCommentFormActions, reducer: addCommentFormReducer, useActions: useCommentFormActions } = addCommentFormSlice