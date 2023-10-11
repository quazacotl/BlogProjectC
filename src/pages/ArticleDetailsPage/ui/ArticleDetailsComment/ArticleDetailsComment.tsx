import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {useCallback} from 'react'
import {getArticleComments} from '../../model/slices/articleDetailsCommentsSlice'
import {getArticleCommentsIsLoading} from '../../model/selectors/comments'
import {
	addCommentFormForArticle
} from '../../model/services/addCommentFormForArticle/addCommentFormForArticle'
import {
	fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import {classNames} from '@/shared/lib/classNames/classNames'
import {Text, TextSize} from '@/shared/ui/Text'
import {AddCommentForm} from '@/features/AddCommentForm'
import {CommentList} from '@/entities/Comment'
import {VStack} from '@/shared/ui/Stack'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect'

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