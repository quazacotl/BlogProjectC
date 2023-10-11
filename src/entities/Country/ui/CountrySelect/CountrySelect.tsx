import {SelectOption} from '@/shared/ui/Select'
import {useTranslation} from 'react-i18next'

import {memo, useCallback} from 'react'
import {CountryEnum} from '../../model/consts/country'
import {ListBox} from '@/shared/ui/Popups'

interface CountrySelectProps {
	className?: string,
	value?: CountryEnum,
	readonly?: boolean,
	onChange?: (value: CountryEnum) => void
}

const options: SelectOption<CountryEnum>[] = [
	{value: CountryEnum.Belarus, content: CountryEnum.Belarus},
	{value: CountryEnum.Russia, content: CountryEnum.Russia},
	{value: CountryEnum.Ukraine, content: CountryEnum.Ukraine},
	{value: CountryEnum.Armenia, content: CountryEnum.Armenia},
	{value: CountryEnum.Kazakhstan, content: CountryEnum.Kazakhstan},
]
export const CountrySelect = memo((props: CountrySelectProps) => {
	CountrySelect.displayName = 'CountrySelect'
	const {value, onChange, readonly} = props
	const {t} = useTranslation()

	const onChangeHandler = useCallback((value: string) => {
		onChange?.(value as CountryEnum)
	}, [onChange])

	return (
		<ListBox readonly={readonly} onChange={onChangeHandler} value={value} items={options} label={t('Укажите страну')}/>
	)
})