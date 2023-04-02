import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
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
	getArticlesPageError,
	getArticlesPageIsLoading,
	getArticlesPageView
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'
import {ViewSelector} from 'features/ViewSelector'

interface ArticlesPageProps {
    className?: string
}


const reducers: ReducerList = {
	articlesPage: articlesPageReducer
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
	ArticlesPage.displayName = 'ArticlesPage'
	const {className} = props
	const {t} = useTranslation('article')
	useAddReducer(reducers)
	const dispatch = useAppDispatch()
	const articles = useSelector(getArticles.selectAll)
	const isLoading = useSelector(getArticlesPageIsLoading)
	const error = useSelector(getArticlesPageError)
	const view = useSelector(getArticlesPageView)

	useInitialEffect(() => {
		dispatch(fetchArticlesList())
	})

	const handleViewClick = useCallback((view: ArticleView) => {
		dispatch(articlesPageActions.setView(view))
		dispatch(articlesPageActions.initState())
	}, [dispatch])

	return (
		<div className={classNames(cls.ArticlesPage, {}, [className])}>
			<ViewSelector view={view} onViewClick={handleViewClick}/>
			<ArticleList
				isLoading={isLoading}
				view={view}
				articles={articles}
			/>
		</div>
	)
})

export default ArticlesPage