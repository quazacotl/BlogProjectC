import {memo, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {useNavigate, useParams} from 'react-router-dom'

import {articleDetailsPageReducer} from '../../model/slices'
import {ArticleDetailsComment} from '../ArticleDetailsComment/ArticleDetailsComment'

import {ArticleDetails} from '@/entities/Article'
import {ArticleRating} from '@/features/articleRating'
import {ArticleRecommendationsList} from '@/features/articleRecommendationsList'
import {getRouteArticles} from '@/shared/const/router'
import {classNames} from '@/shared/lib/classNames/classNames'
import {ReducerList, useAddReducer} from '@/shared/lib/hooks/useAddReducer'
import {Button, ButtonTheme} from '@/shared/ui/Button'
import {VStack} from '@/shared/ui/Stack'
import {Page} from '@/widgets/Page'

interface ArticleDetailsPageProps {
	className?: string
}

const reducers: ReducerList = {
	articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
	ArticleDetailsPage.displayName = 'ArticleDetailsPage'
	const {className} = props
	const {t} = useTranslation('article')
	const {id} = useParams<{id: string}>()
	const navigate = useNavigate()
	useAddReducer(reducers)


	const handleBack = useCallback(() => {
		navigate(getRouteArticles())
	}, [navigate])

	if (!id && __PROJECT__ !== 'storybook') {
		return (
			<div className={classNames('', {}, [className])}>
				{t('Статья не найдена', {ns: 'article'})}
			</div>
		)
	}

	if (!id) {
		return null
	}

	return (
		<Page className={classNames('', {}, [className])}>
			<VStack gap={'32'} max>
				<Button onClick={handleBack} theme={ButtonTheme.OUTLINED}>{t('Назад к списку', {ns: 'article'})}</Button>
				<ArticleDetails id={id || '1'}/>
				<ArticleRating articleId={id}/>
				<ArticleRecommendationsList/>
				<ArticleDetailsComment id={id || '1'}/>
			</VStack>
		</Page>
	)

})

export default ArticleDetailsPage