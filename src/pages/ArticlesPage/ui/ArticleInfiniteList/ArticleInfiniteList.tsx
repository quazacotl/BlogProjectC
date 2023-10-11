import {useSelector} from 'react-redux'
import {useSearchParams} from 'react-router-dom'

import {getArticlesPageIsLoading, getArticlesPageView} from '../../model/selectors/articlesPageSelectors'
import {initArticlesPage} from '../../model/services/initArticlesPage/initArticlesPage'
import {getArticles} from '../../model/slices/articlesPageSlice'

import {ArticleList} from '@/entities/Article'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect'

interface ArticleInfiniteListProps {
    className?: string
}
export const ArticleInfiniteList = (props: ArticleInfiniteListProps) => {
	const {className} = props
	const articles = useSelector(getArticles.selectAll)
	const isLoading = useSelector(getArticlesPageIsLoading)
	const view = useSelector(getArticlesPageView)
	const [searchParams] = useSearchParams()
	const dispatch = useAppDispatch()

	useInitialEffect(() => {
		dispatch(initArticlesPage(searchParams))
	})


	return (
		<ArticleList
			className={className}
			isLoading={isLoading}
			view={view}
			articles={articles}
		/>
	)
}