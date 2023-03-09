import {StateSchema} from 'app/providers/StoreProvider'
import {getProfileData} from './getProfileData'
import {Currency} from 'entities/Currency'
import {Country} from 'entities/Country'

describe('getProfileData.test', () => {
	test('should return value', () => {
		const data = {
			first: 'User',
			lastname: 'Name',
			age: 24,
			currency: Currency.RUB,
			country: Country.Kazakhstan,
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