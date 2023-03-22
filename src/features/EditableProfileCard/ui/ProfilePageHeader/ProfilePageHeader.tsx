import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import {Text} from 'shared/ui/Text/Text'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {getProfileReadonly} from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import {useCallback} from 'react'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {profileActions} from '../../model/slice/profileSlice'
import {updateProfileData} from '../../model/services/updateProfileData/updateProfileData'
import {getUserAuthData} from 'entities/User'


interface ProfilePageHeaderProps {
    className?: string
}
export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
	const {className} = props
	const {t} = useTranslation('profile')
	const readonly = useSelector(getProfileReadonly)
	const dispatch = useAppDispatch()
	const authData = useSelector(getUserAuthData)
	// const userData

	//todo 33.05
	const handleEdit = useCallback(() => {
		dispatch(profileActions.setReadOnly(false))
	}, [dispatch])

	const handleCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit())
	}, [dispatch])

	const handleSave= useCallback(() => {
		dispatch(updateProfileData())
	}, [dispatch])

	return (
		<div className={classNames(cls.profilePageHeader, {}, [className])}>
			<div className={cls.header}>
				<Text title={t('Профиль', {ns: 'profile'})}/>
				{readonly ?
					<Button theme={ButtonTheme.OUTLINED} onClick={handleEdit}>
						{t('Редактировать', {ns: 'profile'})}
					</Button> :
					<div className={cls.buttons}>
						<Button theme={ButtonTheme.OUTLINED} onClick={handleSave}>
							{t('Сохранить', {ns: 'profile'})}
						</Button>
						<Button theme={ButtonTheme.OUTLINED_RED} onClick={handleCancelEdit}>
							{t('Отменить', {ns: 'profile'})}
						</Button>
					</div>
				}
			</div>
		</div>
	)
}