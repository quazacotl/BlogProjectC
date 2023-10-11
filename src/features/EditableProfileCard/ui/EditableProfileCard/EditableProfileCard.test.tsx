import '@testing-library/jest-dom'
import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {profileReducer} from '../../model/slice/profileSlice'
import {EditableProfileCard} from './EditableProfileCard'
import {componentRender} from '@/shared/lib/tests/componentRender/componentRender'
import {Currency} from '@/entities/Currency'
import {CountryEnum} from '@/entities/Country'
import {$api} from '@/shared/api/api'
import {Profile} from '@/entities/Profile'

const profile: Profile = {
	id: '1',
	first: 'admin',
	lastname: 'admin',
	age: 34,
	currency: Currency.EUR,
	country: CountryEnum.Kazakhstan,
	city: 'Moscow',
	username: 'asdmin3'
}

describe('features/EditableProfileCard', () => {
	beforeEach( () => {
		componentRender(<EditableProfileCard id={'1'}/>, {
			initialState: {
				profile: {
					data: profile,
					readonly: true,
					form: profile
				},
				user: {
					authData: {
						id: '1',
						username: 'asdmin3'
					}
				}
			},
			asyncReducers: {
				profile: profileReducer
			}
		})
	})

	test('render', () => {
		expect(screen.getByTestId('EditableProfileCard')).toBeInTheDocument()
	})

	test('Read only mode disable', async () => {
		await userEvent.click(screen.getByTestId('ProfilePageHeader.EditButton'))
		expect(screen.getByTestId('ProfilePageHeader.CancelButton')).toBeInTheDocument()
	})

	test('При отмене значения должны обнуляться', async () => {
		await userEvent.click(screen.getByTestId('ProfilePageHeader.EditButton'))

		await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))
		await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

		await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user')
		await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')

		expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user')
		expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user')

		await userEvent.click(screen.getByTestId('ProfilePageHeader.CancelButton'))

		expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin')
		expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin')
	})

	test('Проверка ошибки', async () => {
		await userEvent.click(screen.getByTestId('ProfilePageHeader.EditButton'))

		await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

		await userEvent.click(screen.getByTestId('ProfilePageHeader.SaveButton'))

		expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
	})

	test('Успешная отправка PUT запроса', async () => {
		const mockJestReq = jest.spyOn($api, 'put')
		await userEvent.click(screen.getByTestId('ProfilePageHeader.EditButton'))

		await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

		await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'some user')

		await userEvent.click(screen.getByTestId('ProfilePageHeader.SaveButton'))


		expect(mockJestReq).toHaveBeenCalled()
	})
})