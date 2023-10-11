import {CountryEnum} from '@/entities/Country'
import {Currency} from '@/entities/Currency'

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