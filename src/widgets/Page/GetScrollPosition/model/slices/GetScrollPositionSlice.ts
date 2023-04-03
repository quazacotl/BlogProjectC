import {createSlice, PayloadAction,} from '@reduxjs/toolkit'
import {GetScrollPositionSchema} from '../types/GetScrollPositionSchema'

const initialState: GetScrollPositionSchema = {
	scroll: {}
}


const GetScrollPositionSlice = createSlice({
	name: 'GetScrollPosition',
	initialState,
	reducers: {
		setScrollPosition: (state, {payload}: PayloadAction<{path: string, position: number}>) => {
			state.scroll[payload.path] = payload.position
		},
	}
})

export const { reducer: GetScrollPositionPageReducer, actions: GetScrollPositionPageActions } = GetScrollPositionSlice
