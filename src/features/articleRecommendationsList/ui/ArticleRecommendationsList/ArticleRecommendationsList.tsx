import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {memo} from 'react'
import {Text, TextSize} from 'shared/ui/Text/Text'
import {ArticleList} from 'entities/Article'
import {VStack} from 'shared/ui/Stack'
import {useGetArticleRecommendationsListQuery} from '../../api/articleRecommendationsApi'

interface ArticleRecommendationsListProps {
	className?: string
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
	ArticleRecommendationsList.displayName = 'ArticleRecommendationsList'
	const { className } = props
	const { t } = useTranslation()
	const {data, isLoading, error} = useGetArticleRecommendationsListQuery(3)

	if (isLoading || error) return null
	
	return (
		<VStack gap={'32'} max className={classNames('', {}, [className])}>
			<Text size={TextSize.L} title={t('Рекомендуем', {ns: 'article'})}/>
			<ArticleList target={'_blank'} articles={data}/>
		</VStack>
	)
})