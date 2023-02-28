import axios from 'axios'
import {loginByUserName} from 'features/AuthByUserName/model/services/loginByUserName/loginByUserName'
import {userActions} from 'entities/User'
import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('loginByUserName.test', () => {
	test('return user value', async ( ) => {
		const userValue = {username: 'asdfa', id: '2'}
		mockedAxios.post.mockResolvedValue({data: userValue})
		const thunk = new TestAsyncThunk(loginByUserName)
		const result = await thunk.callThunk({username: 'asdfa', password: '123'})
		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
		expect(thunk.dispatch).toHaveBeenCalledTimes(3)
		expect(mockedAxios.post).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toBe(userValue)
	})

	test('return rejected value', async ( ) => {
		mockedAxios.post.mockResolvedValue({status: 403})
		const thunk = new TestAsyncThunk(loginByUserName)
		const result = await thunk.callThunk({username: 'asdfa', password: '123'})
		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(mockedAxios.post).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toBe('Authorization error')
	})
})