import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import {useTranslation} from 'react-i18next'
import {memo} from 'react'

interface ArticleDetailsPageProps {
	className?: string
} 

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
	ArticleDetailsPage.displayName = 'ArticleDetailsPage'
	const {className} = props
	const {t} = useTranslation('article')

	return (
		<div className={classNames(cls.articleDetailsPage, {}, [className])}>
			{t('Детали статьи', {ns: 'article'})}
		</div>
	)
})

export default ArticleDetailsPage