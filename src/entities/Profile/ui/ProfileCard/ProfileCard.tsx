import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import {useSelector} from 'react-redux'
import {getProfileData} from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import {getProfileError} from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import {getProfileIsLoading} from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import {useTranslation} from 'react-i18next'
import {Text} from 'shared/ui/Text/Text'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {Input} from 'shared/ui/Input/Input'

interface ProfileCardProps {
    className?: string
}
export const ProfileCard = (props: ProfileCardProps) => {
	const {className} = props
	const {t} = useTranslation('profile')
	const data = useSelector(getProfileData)
	const error = useSelector(getProfileError)
	const isLoading = useSelector(getProfileIsLoading)

	return (
		<div className={classNames(cls.profileCard, {}, [className])}>
			<div className={cls.header}>
				<Text title={t('Профиль', {ns: 'profile'})}/>
				<Button theme={ButtonTheme.OUTLINED}>
					{t('Редактировать', {ns: 'profile'})}
				</Button>
			</div>
			<div className={cls.content}>
				<Input value={data?.first} placeholder={t('Ваше имя', {ns: 'profile'})}/>
				<Input value={data?.lastname} placeholder={t('Ваша фамилия', {ns: 'profile'})}/>
			</div>
		</div>
	)
}