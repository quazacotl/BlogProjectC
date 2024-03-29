import {getProfileData} from './getProfileData'

import {StateSchema} from '@/app/providers/StoreProvider'
import {CountryEnum} from '@/entities/Country'
import {Currency} from '@/entities/Currency'

describe('getProfileData.test', () => {
	test('should return value', () => {
		const data = {
			first: 'User',
			lastname: 'Name',
			age: 24,
			currency: Currency.RUB,
			country: CountryEnum.Kazakhstan,
			city: 'Moscow',
			username: 'username',
		}
		const state: DeepPartial<StateSchema> = {
			profile: {
				data
			}
		}
		expect(getProfileData(state as StateSchema)).toEqual(data)
	})

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getProfileData(state as StateSchema)).toBe(undefined)
	})
})