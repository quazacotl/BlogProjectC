import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {ReducerList, useAddReducer} from 'shared/lib/hooks/useAddReducer'
import {profileReducer} from 'entities/Profile'

const initialReducers: ReducerList = {
	profile: profileReducer
}
interface ProfilePageProps {
    className?: string
}
const ProfilePage = (props: ProfilePageProps) => {
	const {className} = props
	const {t} = useTranslation()
	useAddReducer(initialReducers)

	return (
		<div className={classNames('', {}, [className])}>
			{t('Страница профиля')}
		</div>
	)
}

export default ProfilePage