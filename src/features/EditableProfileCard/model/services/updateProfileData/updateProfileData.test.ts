import {ValidateProfileError} from '../../consts/editableProfileCardConsts'

import {updateProfileData} from './updateProfileData'

import {CountryEnum} from '@/entities/Country'
import {Currency} from '@/entities/Currency'
import {TestAsyncThunk} from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'


const data = {
	first: 'User',
	lastname: 'Name',
	age: 24,
	currency: Currency.RUB,
	country: CountryEnum.Kazakhstan,
	city: 'Moscow',
	username: 'username'
}

describe('updateProfileData.test', () => {
	test('success', async ( ) => {
		const thunk = new TestAsyncThunk(updateProfileData, {profile: {form: data}})
		thunk.api.put.mockResolvedValue({data})

		const result = await thunk.callThunk()
		expect(thunk.api.put).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual(data)
	})

	test('error', async ( ) => {
		const thunk = new TestAsyncThunk(updateProfileData, {profile: {form: data}})
		thunk.api.put.mockResolvedValue({status: 403})
		const result = await thunk.callThunk()
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toEqual([
			ValidateProfileError.SERVER_ERROR
		])
	})

	test('validate error', async ( ) => {
		const thunk = new TestAsyncThunk(updateProfileData, {profile: {form: {...data, lastname: ''}}})
		const result = await thunk.callThunk()
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toEqual([
			ValidateProfileError.INCORRECT_USER_DATA
		])
	})
})