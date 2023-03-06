import {classNames} from 'shared/lib/classNames/classNames'
import {ProfileCard} from 'entities/Profile'
import {useSelector} from 'react-redux'
import {getProfileError} from '../../model/selectors/getProfileError/getProfileError'
import {getProfileIsLoading} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import {ProfilePageHeader} from 'features/EditableProfileCard/ui/ProfilePageHeader/ProfilePageHeader'
import {useCallback, useEffect} from 'react'
import {fetchProfileData} from 'features/EditableProfileCard'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {profileActions} from 'features/EditableProfileCard/model/slice/profileSlice'
import {getProfileReadonly} from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import {getProfileForm} from '../../model/selectors/getProfileForm/getProfileForm'
import {Currency} from 'entities/Currency'
import {Country} from 'entities/Country'

interface EditableProfileCardProps {
    className?: string
}
export const EditableProfileCard = (props: EditableProfileCardProps) => {
	const {className} = props
	const dispatch = useAppDispatch()
	const form = useSelector(getProfileForm)
	const error = useSelector(getProfileError)
	const isLoading = useSelector(getProfileIsLoading)
	const readonly = useSelector(getProfileReadonly)

	useEffect(() => {
		dispatch(fetchProfileData())
	}, [dispatch])

	const handleChangeFirstname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({first: value || ''}))
	}, [dispatch])

	const handleChangeLastname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({lastname: value || ''}))
	}, [dispatch])

	const handleChangeCity = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({city: value || ''}))
	}, [dispatch])

	const handleChangeAge = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({age: Number(value) || 0}))
	}, [dispatch])

	const handleChangeUsername = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({username: value || ''}))
	}, [dispatch])

	const handleChangeAvatar = useCallback((value?: string) => {
		dispatch(profileActions.updateProfile({avatar: value || ''}))
	}, [dispatch])

	const handleChangeCurrency = useCallback((value?: Currency) => {
		dispatch(profileActions.updateProfile({currency: value}))
	}, [dispatch])

	const handleChangeCountry = useCallback((value?: Country) => {
		dispatch(profileActions.updateProfile({country: value}))
	}, [dispatch])


	return (
		<div className={classNames('', {}, [className])}>
			<ProfilePageHeader/>
			<ProfileCard
				error={error}
				isLoading={isLoading}
				data={form}
				readonly={readonly}
				handleChangeFirstname={handleChangeFirstname}
				handleChangeLastname={handleChangeLastname}
				handleChangeCity={handleChangeCity}
				handleChangeAge={handleChangeAge}
				handleChangeUsername={handleChangeUsername}
				handleChangeAvatar={handleChangeAvatar}
				handleChangeCurrency={handleChangeCurrency}
				handleChangeCountry={handleChangeCountry}
			/>
		</div>
	)
}