import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import {ArticleBlockType} from '../../model/consts/articleConsts'
import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { ArticleBlock } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../../ui/ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent'

import cls from './ArticleDetails.module.scss'

import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import {ReducerList, useAddReducer} from '@/shared/lib/hooks/useAddReducer'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import { Avatar } from '@/shared/ui/Avatar'
import { Icon } from '@/shared/ui/Icon'
import { Skeleton } from '@/shared/ui/Skeleton'
import {HStack, VStack} from '@/shared/ui/Stack'
import { Text, TextSize } from '@/shared/ui/Text'

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducerList = {
	articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
	ArticleDetails.displayName = 'ArticleDetails'
	const { className, id } = props
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const isLoading = useSelector(getArticleDetailsIsLoading)
	const article = useSelector(getArticleDetailsData)
	const error = useSelector(getArticleDetailsError)
	useAddReducer(reducers)

	const renderBlock = useCallback((block: ArticleBlock) => {
		switch (block.type) {
		case ArticleBlockType.CODE:
			return (
				<ArticleCodeBlockComponent
					key={block.id}
					block={block}
					className={cls.block}
				/>
			)
		case ArticleBlockType.IMAGE:
			return (
				<ArticleImageBlockComponent
					key={block.id}
					block={block}
					className={cls.block}
				/>
			)
		case ArticleBlockType.TEXT:
			return (
				<ArticleTextBlockComponent
					key={block.id}
					className={cls.block}
					block={block}
				/>
			)
		default:
			return null
		}
	}, [])

	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			dispatch(fetchArticleById(id))
		}
	}, [dispatch, id])

	let content

	if (isLoading) {
		content = (
			<VStack gap={'16'} max>
				<Skeleton className={cls.avatar} width={200} height={200} border="50%" />
				<Skeleton className={cls.title} width={300} height={32} />
				<Skeleton className={cls.skeleton} width={600} height={24} />
				<Skeleton className={cls.skeleton} width="100%" height={200} />
				<Skeleton className={cls.skeleton} width="100%" height={200} />
			</VStack>
		)
	} else if (error) {
		content = (
			<Text
				align={'center'}
				title={t('Произошла ошибка при загрузке статьи.')}
			/>
		)
	} else {
		content = (
			<>
				<HStack justify={'center'} max className={cls.avatarWrapper}>
					<Avatar
						size={200}
						src={article?.img}
						className={cls.avatar}
					/>
				</HStack>
				<VStack gap={'8'} max>
					<Text
						className={cls.title}
						title={article?.title}
						text={article?.subtitle}
						size={TextSize.L}
					/>
					<HStack gap={'8'} className={cls.articleInfo}>
						<Icon className={cls.icon} Svg={EyeIcon} />
						<Text text={String(article?.views)} />
					</HStack>
					<HStack gap={'8'} className={cls.articleInfo}>
						<Icon className={cls.icon} Svg={CalendarIcon} />
						<Text text={article?.createdAt} />
					</HStack>
				</VStack>
				{article?.blocks.map(renderBlock)}
			</>
		)
	}

	return (
		<VStack gap={'16'} max className={classNames(cls.ArticleDetails, {}, [className])}>
			{content}
		</VStack>
	)
})
