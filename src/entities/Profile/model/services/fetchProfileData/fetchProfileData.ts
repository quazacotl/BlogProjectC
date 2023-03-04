import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {Profile} from '../../types/Profile'



export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	'profile/fetchProfileData',
	async (_, thunkAPI) => {
		const {extra, rejectWithValue} = thunkAPI
		try {
			const res = await extra.api.get<Profile>('profile')


			return res.data
		} catch (e) {
			console.log(e)
			return rejectWithValue('Profile error')
		}
	}
)


