import {ChangeEvent, useMemo} from 'react'

import cls from './Select.module.scss'

import {classNames} from '@/shared/lib/classNames/classNames'

export interface SelectOption<T> {
	value: T,
	content: string
}

interface SelectProps<T extends string> {
    className?: string,
	label?: string,
	options?: SelectOption<T>[],
	value?: T,
	readonly?: boolean,
	onChange?: (value: T) => void
}
export const Select = <T extends string>(props: SelectProps<T>) => {
	const {className, label, value, onChange, options, readonly} = props

	const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value as T)
	}

	const optionsList = useMemo(() => {
		return options?.map(item => (
			<option className={cls.option} key={item.value} value={item.value}>
				{item.content}
			</option>
		))
	}, [options])

	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			{label && <span className={cls.label}>{`${label}>`}</span>}
			<select
				disabled={readonly}
				value={value}
				className={cls.select}
				onChange={changeHandler}
			>
				{optionsList}
			</select>
		</div>
	)
}