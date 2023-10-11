import {Rating} from '../../../model/types/types'
import { rtkApi } from '@/shared/api/rtkApi'

interface GetRatingParams {
	userId: string
	articleId: string
}

interface RateArticleParams {
	userId: string
	articleId: string
	rate: number
	feedback?: string
}

const articleRatingApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRating: build.query<Rating[], GetRatingParams>({
			query: ({articleId, userId}) => ({
				url: '/article-ratings',
				params: {articleId, userId}
			}),
			providesTags: ['article-rating']
		}),
		rateArticle: build.mutation<void, RateArticleParams>({
			query: (arg) => ({
				url: '/article-ratings',
				method: 'POST',
				body: arg
			}),
			invalidatesTags: ['article-rating']
		}),
	}),
})

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery
export const useRateArticle = articleRatingApi.useRateArticleMutation