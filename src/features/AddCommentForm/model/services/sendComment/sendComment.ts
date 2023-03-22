import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {Comment} from 'entities/Comment'
import {getUserAuthData} from 'entities/User'
import {getAddCommentFormText} from '../../../model/selectors/AddCommentFormSelectors'
import {getArticleDetailsData} from 'entities/Article'
import {addCommentFormActions} from 'features/AddCommentForm/model/slice/AddCommentFormSlice'


export const sendComment = createAsyncThunk<Comment, void, ThunkConfig<string>>(
	'login/loginByUserName',
	async (_, thunkAPI) => {
		const {extra, rejectWithValue, getState, dispatch} = thunkAPI

		const userData = getUserAuthData(getState())
		const text = getAddCommentFormText(getState())
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

			dispatch(addCommentFormActions.setText(''))

			return res.data
		} catch (e) {
			console.log(e)
			return rejectWithValue('Authorization error')
		}
	}
)



