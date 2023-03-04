import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {ReducerList, useAddReducer} from 'shared/lib/hooks/useAddReducer'
import {fetchProfileData, ProfileCard, profileReducer} from 'entities/Profile'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {useEffect} from 'react'

const initialReducers: ReducerList = {
	profile: profileReducer
}
interface ProfilePageProps {
    className?: string
}
const ProfilePage = (props: ProfilePageProps) => {
	const {className} = props
	const dispatch = useAppDispatch()
	useAddReducer(initialReducers)

	useEffect(() => {
		dispatch(fetchProfileData())
	}, [dispatch])

	return (
		<div className={classNames('', {}, [className])}>
			<ProfileCard/>
		</div>
	)
}

export default ProfilePage