import {classNames} from 'shared/lib/classNames/classNames'
import {memo, useCallback} from 'react'
import cls from './ArticlesPage.module.scss'
import {ArticleList, ArticleView} from 'entities/Article'
import {ReducerList, useAddReducer} from 'shared/lib/hooks/useAddReducer'
import {articlesPageActions, articlesPageReducer, getArticles} from '../../model/slices/articlesPageSlice'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect'
import {useSelector} from 'react-redux'
import {fetchArticlesList} from '../../model/services/fetchArticlesList/fetchArticlesList'
import {
	getArticlesPageIsLoading,
	getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import {ViewSelector} from 'features/ViewSelector'
import {Page} from 'shared/ui/Page/Page'
import {fetchNextArticlesPage} from '../../model/services/fetchNextArticlePage/fetchNextArticlePage'

interface ArticlesPageProps {
    className?: string
}


const reducers: ReducerList = {
	articlesPage: articlesPageReducer
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
	ArticlesPage.displayName = 'ArticlesPage'
	const {className} = props
	useAddReducer(reducers)
	const dispatch = useAppDispatch()
	const articles = useSelector(getArticles.selectAll)
	const isLoading = useSelector(getArticlesPageIsLoading)
	const view = useSelector(getArticlesPageView)


	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage())
	}, [dispatch])

	useInitialEffect(() => {
		dispatch(articlesPageActions.initState())
		dispatch(fetchArticlesList({page: 1}))
	})

	const handleViewClick = useCallback((view: ArticleView) => {
		dispatch(articlesPageActions.setView(view))
	}, [dispatch])

	return (
		<Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
			<ViewSelector view={view} onViewClick={handleViewClick}/>
			<ArticleList
				isLoading={isLoading}
				view={view}
				articles={articles}
			/>
		</Page>
	)
})

export default ArticlesPage