import {Currency} from '@/entities/Currency'
import {Country} from '@/entities/Country'
import {validateProfileData} from './validateProfile'
import {ValidateProfileError} from '../../consts/editableProfileCardConsts'


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

		const result = validateProfileData(data)
		expect(result).toEqual([])
	})

	test('without first and lastname', async ( ) => {
		const result = validateProfileData({...data, first: '', lastname: ''})
		expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
	})

	test('without age', async ( ) => {
		const result = validateProfileData({...data, age: undefined})
		expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
	})

	test('incorrect country', async ( ) => {
		const result = validateProfileData({...data, city: undefined})
		expect(result).toEqual([ValidateProfileError.INCORRECT_CITY])
	})

	test('incorrect all', async ( ) => {
		const result = validateProfileData({})
		expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_CITY])
	})
})