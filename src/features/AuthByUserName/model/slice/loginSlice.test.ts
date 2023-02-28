import {DeepPartial} from '@reduxjs/toolkit'
import {loginReducer, LoginSchema} from 'features/AuthByUserName'
import {loginActions} from 'features/AuthByUserName/model/slice/loginSlice'

describe('loginSlice.test', () => {
	test('test set username', () => {
		const state: DeepPartial<LoginSchema> = {username: '123'}
		expect(loginReducer(state as LoginSchema, loginActions.setUserName('123456'))).toEqual({username: '123456'})
	})
	test('test set password', () => {
		const state: DeepPartial<LoginSchema> = {password: '123'}
		expect(loginReducer(state as LoginSchema, loginActions.setPassword('123456'))).toEqual({password: '123456'})
	})
})