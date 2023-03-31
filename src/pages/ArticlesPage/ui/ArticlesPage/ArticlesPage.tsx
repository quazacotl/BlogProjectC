import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {memo} from 'react'
import cls from './ArticlesPage.module.scss'
import {ArticleList, ArticleView} from 'entities/Article'

interface ArticlesPageProps {
    className?: string
}


const ArticlesPage = memo((props: ArticlesPageProps) => {
	ArticlesPage.displayName = 'ArticlesPage'
	const {className} = props
	const {t} = useTranslation('article')

	return (
		<div className={classNames(cls.ArticlesPage, {}, [className])}>
			<ArticleList
				isLoading
				view={ArticleView.SMALL}
				articles={[]}
			/>
		</div>
	)
})

export default ArticlesPage