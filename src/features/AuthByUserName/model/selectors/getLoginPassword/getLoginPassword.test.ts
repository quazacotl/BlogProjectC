import {getLoginPassword} from './getLoginPassword'
import {StateSchema} from '@/app/providers/StoreProvider'

describe('getLoginPassword.test', () => {
	test('should return value', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				password: '1234651324'
			}
		}
		expect(getLoginPassword(state as StateSchema)).toBe('1234651324')
	})
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getLoginPassword(state as StateSchema)).toBe('')
	})
})