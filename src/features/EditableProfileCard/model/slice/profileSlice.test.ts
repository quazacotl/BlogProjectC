import {ProfileSchema} from '../types/profile'
import {updateProfileData} from '../services/updateProfileData/updateProfileData'
import {ValidateProfileError} from '../consts/editableProfileCardConsts'
import {profileActions, profileReducer} from './profileSlice'
import {Currency} from '@/entities/Currency'
import {CountryEnum} from '@/entities/Country'

const data = {
	first: 'User',
	lastname: 'Name',
	age: 24,
	currency: Currency.RUB,
	country: CountryEnum.Kazakhstan,
	city: 'Moscow',
	username: 'username',
}

describe('profileSlice.test', () => {
	test('test set readonly', () => {
		const state: DeepPartial<ProfileSchema> = {readonly: false}
		expect(profileReducer(state as ProfileSchema, profileActions.setReadOnly(true))).toEqual({readonly: true})
	})

	test('test cancel edit', () => {
		const state: DeepPartial<ProfileSchema> = {data, form: {username: ''}}

		expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
			readonly: true,
			validateError: undefined,
			data,
			form: data
		})
	})

	test('update profile', () => {
		const state: DeepPartial<ProfileSchema> = {form: {username: 'name'}}

		expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({username: 'name'}))).toEqual({
			form: {username: 'name'}
		})
	})

	test('update profile pending', () => {
		const state: DeepPartial<ProfileSchema> = {isLoading: false, validateError: [ValidateProfileError.SERVER_ERROR]}

		expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
			isLoading: true,
			validateError: undefined
		})
	})

	test('update profile fulfilled', () => {
		const state: DeepPartial<ProfileSchema> = {isLoading: true, validateError: undefined}

		expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data,  ''))).toEqual({
			isLoading: false,
			readonly: true,
			validateError: undefined,
			form: data,
			data
		})
	})
})