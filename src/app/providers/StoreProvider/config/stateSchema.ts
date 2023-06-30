import {CounterSchema} from '@/entities/Counter'
import {UserSchema} from '@/entities/User'
import {LoginSchema} from '@/features/AuthByUserName'
import {ToolkitStore} from '@reduxjs/toolkit/dist/configureStore'
import {AnyAction, CombinedState, Reducer, ReducersMapObject} from '@reduxjs/toolkit'
import {AxiosInstance} from 'axios'
import {ProfileSchema} from '@/features/EditableProfileCard'
import {ArticleDetailsSchema} from '@/entities/Article'
import {AddCommentFormSchema} from '@/features/AddCommentForm'
import {ArticlesPageSchema} from '@/pages/ArticlesPage'
import {GetScrollPositionSchema} from '@/widgets/Page'
import {ArticleDetailsPageSchema} from '@/pages/ArticleDetailsPage'
import {rtkApi} from '@/shared/api/rtkApi'


export interface StateSchema {
	counter: CounterSchema,
	user: UserSchema,
	getScrollPosition: GetScrollPositionSchema
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

	//async reducers
	loginForm?: LoginSchema,
	profile?: ProfileSchema
	articleDetails?: ArticleDetailsSchema
	addCommentForm?: AddCommentFormSchema
	articlesPage?: ArticlesPageSchema
	articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
	add: (key: StateSchemaKey, reducer: Reducer) => void
	remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
	reducerManager: ReducerManager
}

export interface ThunkExtraArgs {
	api: AxiosInstance
}

export interface ThunkConfig<T> {
	rejectValue: T,
	extra: ThunkExtraArgs,
	state: StateSchema
}