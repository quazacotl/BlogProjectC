import { useTranslation } from 'react-i18next'
import {memo, useCallback} from 'react'
import {useSelector} from 'react-redux'
import {useGetArticleRating, useRateArticle} from '../../model/services/api/articleRatingApi'
import {Rating} from '@/entities/Rating'
import {getUserAuthData} from '@/entities/User'
import {Skeleton} from '@/shared/ui/Skeleton'

export interface ArticleRatingProps {
	className?: string
	articleId: string
}

const ArticleRating = memo((props: ArticleRatingProps) => {
	ArticleRating.displayName = 'ArticleRating'
	const { className, articleId } = props
	const { t } = useTranslation()

	const userData = useSelector(getUserAuthData)

	const {data, isLoading} = useGetArticleRating({articleId, userId: userData?.id || ''})

	const [rateArticle] = useRateArticle()

	const handleRate = useCallback((starsCount: number, feedback?: string) => {
		try {
			rateArticle({
				userId: userData?.id || '',
				articleId,
				rate: starsCount,
				feedback
			})
		} catch (e) {
			console.log(e)
		}

	}, [articleId, rateArticle, userData?.id])

	const onAccept = useCallback((starsCount: number, feedback?: string) => {
		handleRate(starsCount, feedback)
	}, [handleRate])

	const onCancel = useCallback((starsCount: number) => {
		handleRate(starsCount)
	}, [handleRate])

	if (isLoading) {
		return <Skeleton width={'100%'} height={140}/>
	}
	
	return (
		<Rating
			onAccept={onAccept}
			onCancel={onCancel}
			rate={data?.[0]?.rate || 0}
			className={className}
			hasFeedback
			title={t('Оцените статью')}
			feedbackTitle={t('Оставьте свой отзыв о статье, это поможет улучшить качество статей')}/>
	)
})

export default ArticleRating