import {HTMLAttributeAnchorTarget, memo, useCallback} from 'react'
import { useNavigate } from 'react-router-dom'

import {ArticleBlockType, ArticleView} from '../../model/consts/articleConsts'
import {
	Article, ArticleTextBlock,
} from '../../model/types/article'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

import cls from './ArticleListItem.module.scss'

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import {RoutePath} from '@/shared/types/routeConfigTypes'
import {AppLink} from '@/shared/ui/AppLink'
import { Avatar } from '@/shared/ui/Avatar'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Icon } from '@/shared/ui/Icon'
import { Text } from '@/shared/ui/Text'

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
	target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
	ArticleListItem.displayName = 'ArticleListItem'
	const { className, article, view, target } = props
	const navigate = useNavigate()

	const onOpenArticle = useCallback(() => {
		navigate(RoutePath['article-details'] + article.id)
	}, [article.id, navigate])

	const types = <Text text={article.type.join(', ')} className={cls.types} />
	const views = (
		<>
			<Text text={String(article.views)} className={cls.views} />
			<Icon Svg={EyeIcon} className={cls.icon}/>
		</>
	)

	if (view === ArticleView.BIG) {
		const textBlock = article.blocks.find(
			(block) => block.type === ArticleBlockType.TEXT,
		) as ArticleTextBlock

		return (
			<div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
				<Card className={cls.card}>
					<div className={cls.header}>
						<Avatar size={30} src={article.user.avatar} />
						<Text text={article.user.username} className={cls.username} />
						<Text text={article.createdAt} className={cls.date} />
					</div>
					<Text title={article.title} className={cls.title} />
					{types}
					<img src={article.img} className={cls.img} alt={article.title} />
					{textBlock && (
						<ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
					)}
					<div className={cls.footer}>
						<AppLink to={RoutePath['article-details'] + article.id}>
							<Button
								onClick={onOpenArticle}
								theme={ButtonTheme.OUTLINED}
							>
								Читать далее...
								{/*{t('Читать далее...')}*/}
							</Button>
						</AppLink>
						{views}
					</div>
				</Card>
			</div>
		)
	}

	return (
		<AppLink
			target={target}
			to={RoutePath['article-details'] + article.id}
			className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
		>
			<Card className={cls.card}>
				<div className={cls.imageWrapper}>
					<img alt={article.title} src={article.img} className={cls.img} />
					<Text text={article.createdAt} className={cls.date} />
				</div>
				<div className={cls.infoWrapper}>
					{types}
					{views}
				</div>
				<Text text={article.title} className={cls.title} />
			</Card>
		</AppLink>
	)
})
