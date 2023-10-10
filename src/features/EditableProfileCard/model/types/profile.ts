import {Currency} from '@/entities/Currency/model/consts/currency'
import {Country} from '@/entities/Country/model/consts/country'
import {ValidateProfileError} from '../consts/editableProfileCardConsts'

export interface Profile {
	id?: string,
	first?: string,
	lastname?: string,
	age?: number,
	currency?: Currency,
	country?: Country,
	city?: string,
	username?: string,
	avatar?: string
}

export interface ProfileSchema {
	data?: Profile,
	form?: Profile,
	isLoading: boolean,
	error?: string,
	readonly: boolean,
	validateError?: ValidateProfileError[]
}