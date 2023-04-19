import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {memo, useCallback} from 'react'
import {ArticleDetails, ArticleList} from 'entities/Article'
import {useNavigate, useParams} from 'react-router-dom'
import {Text, TextSize} from 'shared/ui/Text/Text'
import {CommentList} from 'entities/Comment'
import cls from './ArticleDetailsPage.module.scss'
import {ReducerList, useAddReducer} from 'shared/lib/hooks/useAddReducer'
import {getArticleComments} from '../../model/slices/articleDetailsCommentsSlice'
import {useSelector} from 'react-redux'
import {getArticleCommentsIsLoading} from '../../model/selectors/comments'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {fetchCommentsByArticleId} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import {AddCommentForm} from 'features/AddCommentForm'
import {addCommentFormForArticle} from '../../model/services/addCommentFormForArticle/addCommentFormForArticle'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {RoutePath} from 'shared/config/routeConfigTypes'
import {Page} from 'widgets/Page'
import {getArticleRecom} from '../../model/slices/ADRecomSlice'
import {getADRecomIsLoading} from '../../model/selectors/reconmmendations'
import {fetchArticlesRecom} from '../../model/services/fetchArticleRecom/fetchArticleRecom'
import {articleDetailsPageReducer} from '../../model/slices'
import {VStack} from 'shared/ui/Stack'

interface ArticleDetailsPageProps {
	className?: string
}

const reducers: ReducerList = {
	articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
	ArticleDetailsPage.displayName = 'ArticleDetailsPage'
	const {className} = props
	const dispatch = useAppDispatch()
	const {t} = useTranslation('article')
	const {id} = useParams<{id: string}>()
	const navigate = useNavigate()
	useAddReducer(reducers)

	const comments = useSelector(getArticleComments.selectAll)
	const recommends = useSelector(getArticleRecom.selectAll)
	const isLoadingComments = useSelector(getArticleCommentsIsLoading)
	const isLoadingRecom = useSelector(getADRecomIsLoading)

	const handleAddCommentForArticle = useCallback((text: string) => {
		dispatch(addCommentFormForArticle(text))
	}, [dispatch])

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id))
		dispatch(fetchArticlesRecom())
	})

	const handleBack = useCallback(() => {
		navigate(RoutePath.articles)
	}, [navigate])

	if (!id && __PROJECT__ !== 'storybook') {
		return (
			<div className={classNames('', {}, [className])}>
				{t('Статья не найдена', {ns: 'article'})}
			</div>
		)
	}


	return (
		<Page className={classNames('', {}, [className])}>
			<VStack gap={'32'} max>
				<Button onClick={handleBack} theme={ButtonTheme.OUTLINED}>{t('Назад к списку', {ns: 'article'})}</Button>
				<ArticleDetails id={id || '1'}/>
				<Text size={TextSize.L} title={t('Рекомендуем', {ns: 'article'})}></Text>
				<ArticleList target={'_blank'} className={cls.recom} articles={recommends} isLoading={isLoadingRecom}/>
				<Text size={TextSize.L} title={t('Комментарии', {ns: 'article'})}></Text>
				<AddCommentForm handleSendComment={handleAddCommentForArticle}/>
				<CommentList comments={comments} isLoading={isLoadingComments}/>
			</VStack>
		</Page>
	)

})

export default ArticleDetailsPage