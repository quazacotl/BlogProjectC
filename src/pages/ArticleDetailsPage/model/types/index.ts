import {ArticleDetailsCommentsSchema} from './ArticleDetailsCommentsSchema'
import {ADRecomSchema} from './ADRecomSchema'

export interface ArticleDetailsPageSchema {
	comments: ArticleDetailsCommentsSchema,
	recommendations: ADRecomSchema
}