import {
	createEntityAdapter,
	createSlice, PayloadAction,
} from '@reduxjs/toolkit'

import { StateSchema } from 'app/providers/StoreProvider'


import { ADRecomSchema } from '../types/ADRecomSchema'
import {Article} from 'entities/Article'
import {fetchArticlesRecom} from '../../model/services/fetchArticleRecom/fetchArticleRecom'

const recomAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id
})

export const getArticleRecom = recomAdapter.getSelectors<StateSchema>(
	(state) => state.articleDetailsPage?.recommendations || recomAdapter.getInitialState(),
)

const ADRecomSlice = createSlice({
	name: 'ADRecomSlice',
	initialState: recomAdapter.getInitialState<ADRecomSchema>({
		isLoading: true,
		error: undefined,
		ids: [],
		entities: {},
	}),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticlesRecom.pending, (state) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchArticlesRecom.fulfilled, (
				state,
				action: PayloadAction<Article[]>,
			) => {
				state.isLoading = false
				recomAdapter.setAll(state, action.payload)
			})
			.addCase(fetchArticlesRecom.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	},
})

export const { reducer: ADRecomReducer } = ADRecomSlice
