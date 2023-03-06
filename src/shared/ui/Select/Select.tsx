import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import {ChangeEvent, memo, useMemo} from 'react'

export interface SelectOption {
	value: string,
	content: string
}

interface SelectProps {
    className?: string,
	label?: string,
	options?: SelectOption[],
	value?: string,
	readonly?: boolean,
	onChange?: (value: string) => void
}
export const Select = memo((props: SelectProps) => {
	Select.displayName = 'Select'
	const {className, label, value, onChange, options, readonly} = props

	const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value)
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
})