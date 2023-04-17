import {loginByUserName} from '../../../model/services/loginByUserName/loginByUserName'
import {userActions} from 'entities/User'
import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'



describe('loginByUserName.test', () => {
	test('return user value', async ( ) => {
		const userValue = {username: 'asdfa', id: '2'}
		const thunk = new TestAsyncThunk(loginByUserName)
		thunk.api.post.mockResolvedValue({data: userValue})

		const result = await thunk.callThunk({username: 'asdfa', password: '123'})
		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
		expect(thunk.dispatch).toHaveBeenCalledTimes(3)
		expect(thunk.api.post).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toBe(userValue)
	})

	test('return rejected value', async ( ) => {
		const thunk = new TestAsyncThunk(loginByUserName)
		thunk.api.post.mockResolvedValue({status: 403})
		const result = await thunk.callThunk({username: 'asdfa', password: '123'})
		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(thunk.api.post).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toBe('Authorization error')
	})
})