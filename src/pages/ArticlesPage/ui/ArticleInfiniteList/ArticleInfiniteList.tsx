import {useSelector} from 'react-redux'
import {getArticles} from '../../model/slices/articlesPageSlice'
import {getArticlesPageIsLoading, getArticlesPageView} from '../../model/selectors/articlesPageSelectors'
import {useSearchParams} from 'react-router-dom'
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect'
import {initArticlesPage} from '../../model/services/initArticlesPage/initArticlesPage'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {ArticleList} from '@/entities/Article'

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
    );
};