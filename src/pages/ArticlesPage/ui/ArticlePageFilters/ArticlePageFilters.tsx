import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './ArticlePageFilters.module.scss'
import {ViewSelector} from '@/features/ViewSelector'
import {useCallback} from 'react'
import {ArticleSortField, ArticleSortSelector, ArticleTypeTabs, ArticleView} from '@/entities/Article'
import {articlesPageActions} from '../../model/slices/articlesPageSlice'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {useSelector} from 'react-redux'
import {
	getArticlesPageOrder, getArticlesPageSearch,
	getArticlesPageSort, getArticlesPageType,
	getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import {useTranslation} from 'react-i18next'
import {Card} from '@/shared/ui/Card'
import {Input} from '@/shared/ui/Input'
import {SortOrder} from '@/shared/types'
import {fetchArticlesList} from '../../model/services/fetchArticlesList/fetchArticlesList'
import {useDebounce} from '@/shared/lib/hooks/useDebounce'
import {ArticleType} from '@/entities/Article'

interface ArticlePageFiltersProps {
    className?: string
}
export const ArticlePageFilters = (props: ArticlePageFiltersProps) => {
	const {className} = props
	const {t} = useTranslation()
	const dispatch = useAppDispatch()
	const view = useSelector(getArticlesPageView)
	const sort = useSelector(getArticlesPageSort)
	const order = useSelector(getArticlesPageOrder)
	const search = useSelector(getArticlesPageSearch)
	const type = useSelector(getArticlesPageType)



	const fetchData = useCallback(() => {
		dispatch(fetchArticlesList({replace: true}))
	}, [dispatch])

	const debouncedFetchData = useDebounce(fetchData, 1000)

	const handleViewClick = useCallback((view: ArticleView) => {
		dispatch(articlesPageActions.setView(view))
	}, [dispatch])

	const handleTabClick = useCallback((type: ArticleType) => {
		dispatch(articlesPageActions.setType(type))
		fetchData()
	}, [dispatch, fetchData])

	const handleSort = useCallback((sort: ArticleSortField) => {
		dispatch(articlesPageActions.setSort(sort))
		dispatch(articlesPageActions.setPage(1))
		fetchData()
	}, [dispatch, fetchData])

	const handleOrder = useCallback((order: SortOrder) => {
		dispatch(articlesPageActions.setOrder(order))
		dispatch(articlesPageActions.setPage(1))
		fetchData()
	}, [dispatch, fetchData])

	const handleSearch = useCallback((search: string) => {
		dispatch(articlesPageActions.setSearch(search))
		dispatch(articlesPageActions.setPage(1))
		debouncedFetchData()
	}, [dispatch, debouncedFetchData])

	return (
		<div className={classNames(cls.articlePageFilters, {}, [className])}>
			<div className={cls.sortWrapper}>
				<ArticleSortSelector order={order} sort={sort} onChangeOrder={handleOrder} onChangeSort={handleSort}/>
				<ViewSelector view={view} onViewClick={handleViewClick}/>
			</div>
			<Card className={cls.search}>
				<Input onChange={handleSearch} value={search} placeholder={t('Поиск')}/>
			</Card>
			<ArticleTypeTabs className={cls.tabs} value={type} onChangeType={handleTabClick}/>
		</div>
	)
}