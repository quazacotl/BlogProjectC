import {createAsyncThunk} from '@reduxjs/toolkit'

import {getProfileForm} from '../../../model/selectors/getProfileForm/getProfileForm'
import {validateProfileData} from '../../../model/services/validateProfile/validateProfile'
import {ValidateProfileError} from '../../consts/editableProfileCardConsts'

import {ThunkConfig} from '@/app/providers/StoreProvider'
import {Profile} from '@/entities/Profile'



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
			const res = await extra.api.put<Profile>(`profile/${formData?.id}`, formData)

			if (!res.data) {
				throw new Error()
			}

			return res.data
		} catch (e) {
			console.log(e)
			return rejectWithValue([ValidateProfileError.SERVER_ERROR])
		}
	}
)



