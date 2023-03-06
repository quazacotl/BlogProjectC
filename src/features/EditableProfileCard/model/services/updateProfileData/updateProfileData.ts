import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {Profile} from '../../types/profile'
import {getProfileForm} from 'features/EditableProfileCard/model/selectors/getProfileForm/getProfileForm'



export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	'profile/updateProfileData',
	async (_, thunkAPI) => {
		const {extra, rejectWithValue, getState} = thunkAPI
		const formData = getProfileForm(getState())

		try {
			const res = await extra.api.put<Profile>('profile', formData)

			return res.data
		} catch (e) {
			console.log(e)
			return rejectWithValue('Profile error')
		}
	}
)



