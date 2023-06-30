import {classNames} from '@/shared/lib/classNames/classNames'
import {Text, TextSize} from '@/shared/ui/Text/Text'
import {AddCommentForm} from '@/features/AddCommentForm'
import {CommentList} from '@/entities/Comment'
import {VStack} from '@/shared/ui/Stack'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {getArticleComments} from '../../model/slices/articleDetailsCommentsSlice'
import {getArticleCommentsIsLoading} from '../../model/selectors/comments'
import {useCallback} from 'react'
import {
	addCommentFormForArticle
} from '../../model/services/addCommentFormForArticle/addCommentFormForArticle'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect'
import {
	fetchCommentsByArticleId
} from '@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

interface ArticleDetailsCommentProps {
    className?: string
	id: string
}
export const ArticleDetailsComment = (props: ArticleDetailsCommentProps) => {
	const {className, id} = props
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const comments = useSelector(getArticleComments.selectAll)
	const isLoadingComments = useSelector(getArticleCommentsIsLoading)

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id))
	})

	const handleAddCommentForArticle = useCallback((text: string) => {
		dispatch(addCommentFormForArticle(text))
	}, [dispatch])

	return (
		<VStack gap={'32'} max className={classNames('', {}, [className])}>
			<Text size={TextSize.L} title={t('Комментарии', {ns: 'article'})}></Text>
			<AddCommentForm handleSendComment={handleAddCommentForArticle}/>
			<CommentList comments={comments} isLoading={isLoadingComments}/>
		</VStack>
	)
}