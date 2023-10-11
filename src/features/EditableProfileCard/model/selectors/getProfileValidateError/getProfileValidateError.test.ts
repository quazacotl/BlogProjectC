import {ValidateProfileError} from '../../consts/editableProfileCardConsts'

import {getProfileValidateError} from './getProfileValidateError'

import {StateSchema} from '@/app/providers/StoreProvider'

describe('getProfileValidateError.test', () => {
	test('should return incorrect user data', () => {

		const state: DeepPartial<StateSchema> = {
			profile: {
				validateError: [ValidateProfileError.INCORRECT_USER_DATA]
			}
		}
		expect(getProfileValidateError(state as StateSchema)).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
	})

	test('should 3 errors', () => {

		const state: DeepPartial<StateSchema> = {
			profile: {
				validateError: [ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_CITY]
			}
		}
		expect(getProfileValidateError(state as StateSchema)).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_CITY])
	})

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getProfileValidateError(state as StateSchema)).toBe(undefined)
	})
})