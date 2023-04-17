import {Select, SelectOption} from 'shared/ui/Select/Select'
import {useTranslation} from 'react-i18next'
import {Currency} from '../../model/types/currency'
import {memo, useCallback} from 'react'

interface CurrencySelectProps {
    className?: string,
	value?: Currency,
	readonly?: boolean,
	onChange?: (value: Currency) => void
}

const options: SelectOption<Currency>[] = [
	{value: Currency.EUR, content: Currency.EUR},
	{value: Currency.RUB, content: Currency.RUB},
	{value: Currency.USD, content: Currency.USD},
]
export const CurrencySelect = memo((props: CurrencySelectProps) => {
	CurrencySelect.displayName = 'CurrencySelect'
	const {value, onChange, readonly} = props
	const {t} = useTranslation()

	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as Currency)
	}, [onChange])

	return (
		<Select
			readonly={readonly}
			label={t('Укажите валюту')}
			options={options}
			value={value}
			onChange={onChangeHandler}
		/>
	)
})