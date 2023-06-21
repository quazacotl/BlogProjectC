import {StoryFn} from '@storybook/react'
import {StateSchema, StoreProvider} from 'app/providers/StoreProvider'
import {loginReducer} from 'features/AuthByUserName'
import {ReducerList} from 'shared/lib/hooks/useAddReducer'
import {profileReducer} from 'features/EditableProfileCard'
import {articleDetailsReducer} from 'entities/Article/model/slice/articleDetailsSlice'
import {addCommentFormReducer} from 'features/AddCommentForm/model/slice/AddCommentFormSlice'
import {articleDetailsPageReducer} from 'pages/ArticleDetailsPage'


const defaultAsyncReducers: ReducerList = {
	loginForm: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	addCommentForm: addCommentFormReducer,
	articleDetailsPage: articleDetailsPageReducer
}



export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) => (Story: StoryFn) => (
	<StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
		<Story />
	</StoreProvider>
)