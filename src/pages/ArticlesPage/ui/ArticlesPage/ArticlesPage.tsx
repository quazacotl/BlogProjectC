import {classNames} from 'shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {memo} from 'react'

interface ArticlesPageProps {
    className?: string
}
const ArticlesPage = memo((props: ArticlesPageProps) => {
	ArticlesPage.displayName = 'ArticlesPage'
	const {className} = props
	const {t} = useTranslation('article')

	return (
		<div className={classNames('', {}, [className])}>
			{t('Страница статей', {ns: 'article'})}
		</div>
	)
})

export default ArticlesPage