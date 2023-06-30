import {StateSchema} from '@/app/providers/StoreProvider'
import {getProfileForm} from './getProfileForm'
// import {Currency} from 'entities/Currency'
// import {Country} from 'entities/Country'

describe('getProfileForm.test', () => {
	// test('should return value', () => {
	// 	const form = {
	// 		first: 'User',
	// 		lastname: 'Name',
	// 		age: 24,
	// 		currency: Currency.RUB,
	// 		country: Country.Kazakhstan,
	// 		city: 'Moscow',
	// 		username: 'username',
	// 	}
	// 	const state: DeepPartial<StateSchema> = {
	// 		profile: {
	// 			form
	// 		}
	// 	}
	// 	expect(getProfileForm(state as StateSchema)).toEqual(form)
	// })

	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {}
		expect(getProfileForm(state as StateSchema)).toBe(undefined)
	})
})