import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {Profile, ValidateProfileError} from '../../types/profile'
import {getProfileForm} from 'features/EditableProfileCard/model/selectors/getProfileForm/getProfileForm'
import {validateProfileData} from 'features/EditableProfileCard/model/services/validateProfile/validateProfile'



export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
	'profile/updateProfileData',
	async (_, thunkAPI) => {
		const {extra, rejectWithValue, getState} = thunkAPI
		const formData = getProfileForm(getState())

		const errors = validateProfileData(formData)

		if (errors.length) {
			return rejectWithValue(errors)
		}

		try {
			const res = await extra.api.put<Profile>('profile', formData)

			return res.data
		} catch (e) {
			console.log(e)
			return rejectWithValue([ValidateProfileError.SERVER_ERROR])
		}
	}
)



