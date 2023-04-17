import {Select, SelectOption} from 'shared/ui/Select/Select'
import {useTranslation} from 'react-i18next'

import {memo, useCallback} from 'react'
import {Country} from '../../model/types/country'

interface CountrySelectProps {
	className?: string,
	value?: Country,
	readonly?: boolean,
	onChange?: (value: Country) => void
}

const options: SelectOption<Country>[] = [
	{value: Country.Belarus, content: Country.Belarus},
	{value: Country.Russia, content: Country.Russia},
	{value: Country.Ukraine, content: Country.Ukraine},
	{value: Country.Armenia, content: Country.Armenia},
	{value: Country.Kazakhstan, content: Country.Kazakhstan},
]
export const CountrySelect = memo((props: CountrySelectProps) => {
	CountrySelect.displayName = 'CountrySelect'
	const {value, onChange, readonly} = props
	const {t} = useTranslation()

	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as Country)
	}, [onChange])

	return (
		<Select
			readonly={readonly}
			label={t('Укажите страну')}
			options={options}
			value={value}
			onChange={onChangeHandler}
		/>
	)
})