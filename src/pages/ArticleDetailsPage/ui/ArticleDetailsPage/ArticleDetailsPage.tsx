import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import {useTranslation} from 'react-i18next'

interface ArticleDetailsPageProps {
	className?: string
}

export const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
	const {className} = props
	const {t} = useTranslation('article')

	return (
		<div className={classNames(cls.articledetailspage, {}, [className])}>
			{t('Детали статьи')}
		</div>
	)
}