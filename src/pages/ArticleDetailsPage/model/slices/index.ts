import {combineReducers} from '@reduxjs/toolkit'

import {ArticleDetailsPageSchema} from '../types/index'

import {ADRecomReducer} from './ADRecomSlice'
import {articleDetailsCommentsReducer} from './articleDetailsCommentsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
	recommendations: ADRecomReducer,
	comments: articleDetailsCommentsReducer
})