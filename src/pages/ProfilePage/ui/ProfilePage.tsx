import {classNames} from 'shared/lib/classNames/classNames'
import {ReducerList, useAddReducer} from 'shared/lib/hooks/useAddReducer'
import {EditableProfileCard, profileReducer} from 'features/EditableProfileCard'
import {Page} from 'shared/ui/Page/Page'

const initialReducers: ReducerList = {
	profile: profileReducer
}
interface ProfilePageProps {
    className?: string
}
const ProfilePage = (props: ProfilePageProps) => {
	const {className} = props
	useAddReducer(initialReducers)



	return (
		<Page className={classNames('', {}, [className])}>
			<EditableProfileCard/>
		</Page>
	)
}

export default ProfilePage