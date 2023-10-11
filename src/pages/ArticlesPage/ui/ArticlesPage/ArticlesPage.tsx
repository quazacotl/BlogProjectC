import {memo, useCallback} from 'react'

import {fetchNextArticlesPage} from '../../model/services/fetchNextArticlePage/fetchNextArticlePage'
import {articlesPageReducer} from '../../model/slices/articlesPageSlice'
import {ArticleInfiniteList} from '../ArticleInfiniteList/ArticleInfiniteList'
import {ArticlePageFilters} from '../ArticlePageFilters/ArticlePageFilters'

import cls from './ArticlesPage.module.scss'

import {classNames} from '@/shared/lib/classNames/classNames'
import {ReducerList, useAddReducer} from '@/shared/lib/hooks/useAddReducer'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {Page} from '@/widgets/Page'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducerList = {
	articlesPage: articlesPageReducer
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
	ArticlesPage.displayName = 'ArticlesPage'
	const {className} = props
	useAddReducer(reducers, false)
	const dispatch = useAppDispatch()

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage())
	}, [dispatch])


	return (
		<Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
			<ArticlePageFilters/>
			<ArticleInfiniteList className={cls.list}/>
		</Page>
	)
})

export default ArticlesPage