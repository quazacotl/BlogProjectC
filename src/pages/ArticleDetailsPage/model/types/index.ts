import {ADRecomSchema} from './ADRecomSchema'
import {ArticleDetailsCommentsSchema} from './ArticleDetailsCommentsSchema'

export interface ArticleDetailsPageSchema {
	comments: ArticleDetailsCommentsSchema,
	recommendations: ADRecomSchema
}