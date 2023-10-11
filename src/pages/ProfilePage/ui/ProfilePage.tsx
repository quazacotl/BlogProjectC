import {useTranslation} from 'react-i18next'
import {useParams} from 'react-router-dom'

import {EditableProfileCard, profileReducer} from '@/features/EditableProfileCard'
import {classNames} from '@/shared/lib/classNames/classNames'
import {ReducerList, useAddReducer} from '@/shared/lib/hooks/useAddReducer'
import {Text} from '@/shared/ui/Text'
import {Page} from '@/widgets/Page'

const initialReducers: ReducerList = {
	profile: profileReducer
}
interface ProfilePageProps {
    className?: string
}
const ProfilePage = (props: ProfilePageProps) => {
	const {className} = props
	useAddReducer(initialReducers)
	const {t} = useTranslation()
	const {id} = useParams<{id: string}>()

	if (!id) return <Text text={t('Профиль не найден')}/>

	return (
		<Page className={classNames('', {}, [className])}>
			<EditableProfileCard id={id}/>
		</Page>
	)
}

export default ProfilePage