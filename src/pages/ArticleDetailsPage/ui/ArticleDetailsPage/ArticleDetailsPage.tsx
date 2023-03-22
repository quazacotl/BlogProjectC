import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {memo, useCallback} from 'react'
import {ArticleDetails} from 'entities/Article'
import {useParams} from 'react-router-dom'
import {Text} from 'shared/ui/Text/Text'
import {CommentList} from 'entities/Comment'
import cls from './ArticleDetailsPage.module.scss'
import {ReducerList, useAddReducer} from 'shared/lib/hooks/useAddReducer'
import {articleDetailsCommentsReducer, getArticleComments} from '../../model/slices/articleDetailsCommentsSlice'
import {useSelector} from 'react-redux'
import {getArticleCommentsIsLoading} from '../../model/selectors/comments'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {
	fetchCommentsByArticleId
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import {AddCommentForm} from 'features/AddCommentForm'
import {
	addCommentFormForArticle
} from 'pages/ArticleDetailsPage/model/services/addCommentFormForArticle/addCommentFormForArticle'

interface ArticleDetailsPageProps {
	className?: string
}

const reducers: ReducerList = {
	articleDetailsComments: articleDetailsCommentsReducer
}

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
	ArticleDetailsPage.displayName = 'ArticleDetailsPage'
	const {className} = props
	const dispatch = useAppDispatch()
	const {t} = useTranslation('article')
	const {id} = useParams<{id: string}>()
	useAddReducer(reducers)

	const comments = useSelector(getArticleComments.selectAll)
	const isLoadingComments = useSelector(getArticleCommentsIsLoading)

	const handleAddCommentForArticle = useCallback((text: string) => {
		dispatch(addCommentFormForArticle(text))
	}, [dispatch])

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id))
	})

	if (!id && __PROJECT__ !== 'storybook') {
		return (
			<div className={classNames('', {}, [className])}>
				{t('Статья не найдена', {ns: 'article'})}
			</div>
		)
	}


	return (
		<div className={classNames('', {}, [className])}>
			<ArticleDetails id={id || '1'}/>
			<Text className={cls.commentTitle} title={t('Комментарии', {ns: 'article'})}></Text>
			<AddCommentForm handleSendComment={handleAddCommentForArticle}/>
			<CommentList comments={comments} isLoading={isLoadingComments}/>
		</div>
	)

})

export default ArticleDetailsPage