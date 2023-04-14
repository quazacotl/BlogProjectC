import {EntityState} from '@reduxjs/toolkit'
import {Article} from 'entities/Article'

export interface ADRecomSchema extends EntityState<Article>{
	isLoading?: boolean
	error?: string
}