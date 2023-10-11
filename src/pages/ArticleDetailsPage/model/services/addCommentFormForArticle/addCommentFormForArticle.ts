import {createAsyncThunk} from '@reduxjs/toolkit'

import {
	fetchCommentsByArticleId
} from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

import {ThunkConfig} from '@/app/providers/StoreProvider'
import {getArticleDetailsData} from '@/entities/Article'
import {Comment} from '@/entities/Comment'
import {getUserAuthData} from '@/entities/User'


export const addCommentFormForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
	'articleDetails/addCommentFormForArticle',
	async (text, thunkAPI) => {
		const {extra, rejectWithValue, getState, dispatch} = thunkAPI

		const userData = getUserAuthData(getState())
		const article = getArticleDetailsData(getState())

		if (!userData || !text || !article){
			return rejectWithValue('no data')
		}

		try {
			const res = await extra.api.post<Comment>('comments', {
				articleId: article.id,
				userId: userData.id,
				text
			})

			if (!res.data) {
				throw new Error()
			}

			dispatch(fetchCommentsByArticleId(article.id))

			return res.data
		} catch (e) {
			console.log(e)
			return rejectWithValue('error')
		}
	}
)



