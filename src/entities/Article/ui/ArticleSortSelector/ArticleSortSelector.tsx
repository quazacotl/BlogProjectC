import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticleSortSelector.module.scss'
import {Select, SelectOption} from 'shared/ui/Select/Select'
import {useTranslation} from 'react-i18next'
import {useMemo} from 'react'
import {ArticleSortField} from 'entities/Article/model/types/article'
import {SortOrder} from 'shared/types'

interface ArticleSortSelectorProps {
    className?: string
	sort: ArticleSortField;
	order: SortOrder;
	onChangeOrder: (newOrder: SortOrder) => void;
	onChangeSort: (newSort: ArticleSortField) => void;
}
export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
	const {t} = useTranslation()
    const {className, sort, order, onChangeSort, onChangeOrder} = props

	const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
		{
			value: 'asc',
			content: t('возрастанию')
		},
		{
			value: 'desc',
			content: t('убыванию')
		}
	], [t])

	const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
		{
			value: ArticleSortField.CREATED,
			content: t('дате создания')
		},
		{
			value: ArticleSortField.TITLE,
			content: t('названию')
		}
		,
		{
			value: ArticleSortField.VIEWS,
			content: t('просмотрам')
		}
	], [t])



    return (
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
			<Select options={sortFieldOptions} label={t('Сортировать по')} value={sort} onChange={onChangeSort}/>
			<Select options={orderOptions} label={t('по ')} value={order} onChange={onChangeOrder}/>
        </div>
    );
};