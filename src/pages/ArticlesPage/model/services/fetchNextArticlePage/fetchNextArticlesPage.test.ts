import {fetchArticlesList} from '../fetchArticlesList/fetchArticlesList'
import {fetchNextArticlesPage} from './fetchNextArticlePage'
import {TestAsyncThunk} from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('fetchNextArticlesPage.test', () => {
	test('success', async ( ) => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: {
				page: 2,
				hasMore: true,
				ids: [],
				entities: {},
				limit: 5,
				isLoading: false
			}
		})

		await thunk.callThunk()

		expect(thunk.dispatch).toBeCalledTimes(4)
		expect(fetchArticlesList).toHaveBeenCalled()

	})

	test('fetchNextArticlesPage not called', async ( ) => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: {
				page: 2,
				hasMore: false,
				ids: [],
				entities: {},
				limit: 5,
				isLoading: false
			}
		})

		await thunk.callThunk()
		expect(thunk.dispatch).toBeCalledTimes(2)
		expect(fetchArticlesList).not.toHaveBeenCalledWith()

	})
})