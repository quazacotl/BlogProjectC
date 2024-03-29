import {HTMLAttributeAnchorTarget, memo} from 'react'
import {useTranslation} from 'react-i18next'

import {ArticleView} from '../../model/consts/articleConsts'
import {Article} from '../../model/types/article'
import {ArticleListItem} from '../ArticleListItem/ArticleListItem'
import {ArticleListItemSkeleton} from '../ArticleListItem/ArticleListItemSkeleton'

import cls from './ArticleList.module.scss'

import {classNames} from '@/shared/lib/classNames/classNames'
import {Text, TextSize} from '@/shared/ui/Text'

interface ArticleListProps {
    className?: string;
    articles: Article[]
    isLoading?: boolean;
    view?: ArticleView;
	target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
	.fill(0)
	.map((item, index) => (
		<ArticleListItemSkeleton className={cls.card} key={index} view={view} />
	))

export const ArticleList = memo((props: ArticleListProps) => {
	ArticleList.displayName = 'ArticleList'
	const {
		className,
		articles,
		view = ArticleView.SMALL,
		isLoading,
		target
	} = props
	const { t } = useTranslation()


	const renderArticle = (article: Article) => (
		<ArticleListItem
			target={target}
			article={article}
			view={view}
			className={cls.card}
			key={article.id}
		/>
	)

	if (!isLoading && !articles.length) {
		return (
			<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
				<Text size={TextSize.L} title={t('Не найдено ни одной статьи')}/>
			</div>
		)
	} else {
		return (
			<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
				{articles.length > 0 && articles.map(renderArticle)}
				{isLoading && getSkeletons(view)}
			</div>
		)
	}
})
