import {TestAsyncThunk} from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import {fetchProfileData} from './fetchProfileData'
import {Currency} from '@/entities/Currency'
import {Country} from '@/entities/Country'


const data = {
	first: 'User',
	lastname: 'Name',
	age: 24,
	currency: Currency.RUB,
	country: Country.Kazakhstan,
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