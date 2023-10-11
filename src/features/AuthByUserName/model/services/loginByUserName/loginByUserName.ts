import {createAsyncThunk} from '@reduxjs/toolkit'

import {ThunkConfig} from '@/app/providers/StoreProvider'
import {User, userActions} from '@/entities/User'
import {USER_LOCALSTORAGE_KEY} from '@/shared/const/localStorage'

interface LoginByUserNameProps {
	username: string,
	password: string
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, ThunkConfig<string>>(
	'login/loginByUserName',
	async (authData, thunkAPI) => {
		const {extra, rejectWithValue, dispatch} = thunkAPI
		try {
			const res = await extra.api.post<User>('login', authData)

			if (!res.data) {
				throw new Error()
			}

			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data))

			dispatch(userActions.setAuthData(res.data))

			// extra.navigate && extra.navigate('/about')

			return res.data
		} catch (e) {
			console.log(e)
			return rejectWithValue('Authorization error')
		}
	}
)



