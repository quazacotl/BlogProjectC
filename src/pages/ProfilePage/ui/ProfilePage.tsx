import {useParams} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {classNames} from '@/shared/lib/classNames/classNames'
import {ReducerList, useAddReducer} from '@/shared/lib/hooks/useAddReducer'
import {EditableProfileCard, profileReducer} from '@/features/EditableProfileCard'
import {Page} from '@/widgets/Page'
import {Text} from '@/shared/ui/Text'

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