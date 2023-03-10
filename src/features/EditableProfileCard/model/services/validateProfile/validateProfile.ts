import {Profile} from 'features/EditableProfileCard'
import {ValidateProfileError} from 'features/EditableProfileCard/model/types/profile'

export const validateProfileData = (profile?: Profile) => {
	const errors: ValidateProfileError[] = []

	if (!profile) {
		errors.push(ValidateProfileError.NO_DATA)
	} else {
		const {first, lastname, age, city} = profile

		if (!first || !lastname) {
			errors.push(ValidateProfileError.INCORRECT_USER_DATA)
		}

		if (!age || !Number.isInteger(age)) {
			errors.push(ValidateProfileError.INCORRECT_AGE)
		}

		if (!city) {
			errors.push(ValidateProfileError.INCORRECT_CITY)
		}
	}


	return errors
}