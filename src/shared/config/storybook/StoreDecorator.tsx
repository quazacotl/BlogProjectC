import {Story} from '@storybook/react'
import {StateSchema, StoreProvider} from 'app/providers/StoreProvider'
import {loginReducer} from 'features/AuthByUserName'
import {ReducerList} from 'shared/lib/hooks/useAddReducer'
import {profileReducer} from 'features/EditableProfileCard'
import {articleDetailsReducer} from 'entities/Article/model/slice/articleDetailsSlice'
import {addCommentFormReducer} from 'features/AddCommentForm/model/slice/AddCommentFormSlice'
import {articleDetailsCommentsReducer} from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice'


const defaultAsyncReducers: ReducerList = {
	loginForm: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	addCommentForm: addCommentFormReducer,
	articleDetailsComments: articleDetailsCommentsReducer
}


// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) => (Story: Story) => (
	<StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
		<Story />
	</StoreProvider>
)