import {Currency} from '@/entities/Currency'
import {CountryEnum} from '@/entities/Country'
import {ValidateProfileError} from '../consts/editableProfileCardConsts'

export interface Profile {
	id?: string,
	first?: string,
	lastname?: string,
	age?: number,
	currency?: Currency,
	country?: CountryEnum,
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