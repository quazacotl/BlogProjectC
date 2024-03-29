import {getProfileError} from './getProfileError'

import {StateSchema} from '@/app/providers/StoreProvider'

describe('getProfileError.test', () => {
	test('should return value', () => {

		const state: DeepPartial<StateSchema> = {
			profile: {
				error: 'error'
			}
		}
		expect(getProfileError(state as StateSchema)).toBe('error')
	})

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getProfileError(state as StateSchema)).toBe(undefined)
	})
})