import {fetchProfileData} from './fetchProfileData'

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
	username: 'username',
}

describe('fetchProfileData.test', () => {
	test('success', async ( ) => {
		const thunk = new TestAsyncThunk(fetchProfileData)
		thunk.api.get.mockResolvedValue({data})

		const result = await thunk.callThunk('1')
		expect(thunk.api.get).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual(data)
	})

	test('error', async ( ) => {
		const thunk = new TestAsyncThunk(fetchProfileData)
		thunk.api.get.mockResolvedValue({status: 403})
		const result = await thunk.callThunk('1')
		expect(result.meta.requestStatus).toBe('rejected')
	})
})