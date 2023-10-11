import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {useCallback} from 'react'
import {getProfileReadonly} from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import {profileActions} from '../../model/slice/profileSlice'
import {updateProfileData} from '../../model/services/updateProfileData/updateProfileData'
import {getProfileData} from '../../model/selectors/getProfileData/getProfileData'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {getUserAuthData} from '@/entities/User'
import {Button, ButtonTheme} from '@/shared/ui/Button'
import {Text} from '@/shared/ui/Text'
import {classNames} from '@/shared/lib/classNames/classNames'
import {HStack} from '@/shared/ui/Stack'


interface ProfilePageHeaderProps {
    className?: string
}
export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
	const {className} = props
	const {t} = useTranslation('profile')
	const readonly = useSelector(getProfileReadonly)
	const dispatch = useAppDispatch()
	const authData = useSelector(getUserAuthData)
	const profileData = useSelector(getProfileData)
	const canEdit = authData?.id === profileData?.id

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
		<HStack max justify={'between'} className={classNames('', {}, [className])}>
			<Text title={t('Профиль', {ns: 'profile'})}/>
			{canEdit && (
				<>
					{readonly ?
						<Button theme={ButtonTheme.OUTLINED} onClick={handleEdit} data-testid={'ProfilePageHeader.EditButton'}>
							{t('Редактировать', {ns: 'profile'})}
						</Button> :
						<HStack gap={'16'}>
							<Button theme={ButtonTheme.OUTLINED} onClick={handleSave} data-testid={'ProfilePageHeader.SaveButton'}>
								{t('Сохранить', {ns: 'profile'})}
							</Button>
							<Button theme={ButtonTheme.OUTLINED_RED} onClick={handleCancelEdit} data-testid={'ProfilePageHeader.CancelButton'}>
								{t('Отменить', {ns: 'profile'})}
							</Button>
						</HStack>
					}
				</>
			)
			}
		</HStack>
	)
}