import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {memo} from 'react'
import {ArticleDetails} from 'entities/Article'
import {useParams} from 'react-router-dom'

interface ArticleDetailsPageProps {
	className?: string
} 

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
	ArticleDetailsPage.displayName = 'ArticleDetailsPage'
	const {className} = props
	const {t} = useTranslation('article')
	const {id} = useParams<{id: string}>()

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
		</div>
	)

})

export default ArticleDetailsPage