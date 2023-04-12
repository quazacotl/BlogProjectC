import {classNames} from 'shared/lib/classNames/classNames'
import {memo, useCallback} from 'react'
import cls from './ArticlesPage.module.scss'
import {ArticleList} from 'entities/Article'
import {ReducerList, useAddReducer} from 'shared/lib/hooks/useAddReducer'
import {articlesPageReducer, getArticles} from '../../model/slices/articlesPageSlice'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect'
import {useSelector} from 'react-redux'
import {getArticlesPageIsLoading, getArticlesPageView} from '../../model/selectors/articlesPageSelectors'
import {fetchNextArticlesPage} from '../../model/services/fetchNextArticlePage/fetchNextArticlePage'
import {initArticlesPage} from '../../model/services/initArticlesPage/initArticlesPage'
import {Page} from 'widgets/Page'
import {ArticlePageFilters} from '../ArticlePageFilters/ArticlePageFilters'
import {useSearchParams} from 'react-router-dom'

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
	const articles = useSelector(getArticles.selectAll)
	const isLoading = useSelector(getArticlesPageIsLoading)
	const view = useSelector(getArticlesPageView)
	const [searchParams] = useSearchParams()

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage())
	}, [dispatch])

	useInitialEffect(() => {
		dispatch(initArticlesPage(searchParams))
	})



	return (
		<Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
			<ArticlePageFilters/>
			<ArticleList
				className={cls.list}
				isLoading={isLoading}
				view={view}
				articles={articles}
			/>
		</Page>
	)
})

export default ArticlesPage