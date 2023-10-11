import {useCallback, useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {ArticleType} from '../../model/consts/articleConsts'
import {classNames} from '@/shared/lib/classNames/classNames'
import {TabItem, Tabs} from '@/shared/ui/Tabs'

interface ArticleTypeTabsProps {
    className?: string
	value: string
	onChangeType: (tab: ArticleType) => void
}
export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
	const {className, value, onChangeType} = props
	const {t} = useTranslation()


	const typeTabs = useMemo<TabItem[]>(() => [
		{
			value: ArticleType.ALL,
			content: t('Все')
		},
		{
			value: ArticleType.IT,
			content: t('Айти')
		},
		{
			value: ArticleType.SCIENCE,
			content: t('Наука')
		},
		{
			value: ArticleType.ECONOMICS,
			content: t('Экономика')
		}
	], [t])

	const handleTabClick = useCallback((tab: TabItem) => {
		onChangeType(tab.value as ArticleType)
	}, [onChangeType])


	return (
		<Tabs className={classNames('', {}, [className])} value={value} tabs={typeTabs} onTabClick={handleTabClick}/>
	)
}