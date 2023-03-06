import {classNames} from 'shared/lib/classNames/classNames'
import {ReducerList, useAddReducer} from 'shared/lib/hooks/useAddReducer'
import {EditableProfileCard, profileReducer} from 'features/EditableProfileCard'

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
		<div className={classNames('', {}, [className])}>
			<EditableProfileCard/>
		</div>
	)
}

export default ProfilePage