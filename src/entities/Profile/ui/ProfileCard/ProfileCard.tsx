import {useTranslation} from 'react-i18next'

import {Profile} from '../../model/types/profile'

import cls from './ProfileCard.module.scss'

import {CountryEnum, CountrySelect} from '@/entities/Country'
import {Currency, CurrencySelect} from '@/entities/Currency'
import {classNames, Mods} from '@/shared/lib/classNames/classNames'
import {Avatar} from '@/shared/ui/Avatar'
import {Input} from '@/shared/ui/Input'
import {Loader} from '@/shared/ui/Loader'
import {HStack, VStack} from '@/shared/ui/Stack'
import {Text, TextTheme} from '@/shared/ui/Text'

interface ProfileCardProps {
    className?: string
	data?: Profile
	error?: string
	isLoading?: boolean,
	readonly?: boolean,
	handleChangeFirstname?: (value?: string) => void,
	handleChangeLastname?: (value?: string) => void,
	handleChangeCity?: (value?: string) => void,
	handleChangeAge?: (value?: string) => void
	handleChangeUsername?: (value?: string) => void
	handleChangeAvatar?: (value?: string) => void,
	handleChangeCurrency?: (currency: Currency) => void
	handleChangeCountry?: (country: CountryEnum) => void

}
export const ProfileCard = (props: ProfileCardProps) => {
	const {className, isLoading, error, data,
		handleChangeCurrency, handleChangeFirstname,
		handleChangeLastname, readonly, handleChangeCity, handleChangeAge,
		handleChangeUsername, handleChangeAvatar, handleChangeCountry} = props
	const {t} = useTranslation('profile')

	const mods: Mods = {
		[cls.editing]: !readonly
	}


	if (isLoading) {
		return (
			<HStack justify={'center'} max  className={classNames(cls.profileCard, {}, [className, cls.loading])}>
				<Loader/>
			</HStack>
		)
	}

	if (error) {
		return (
			<HStack justify={'center'} max className={classNames(cls.profileCard, {}, [className, cls.error])}>
				<Text
					theme={TextTheme.ERROR}
					align={'center'}
					title={t('Произошла ошибка при загрузке профиля', {ns: 'profile'})}
					text={t('Попробуйте обновить страницу', {ns: 'profile'})}
				/>
			</HStack>
		)
	}

	return (
		<VStack gap={'16'} max className={classNames(cls.profileCard, mods, [className])}>
			{data?.avatar &&
					<HStack justify={'center'} max className={cls.avatar_wrapper}>
						<Avatar src={data.avatar} alt={'avatar'}/>
					</HStack>
			}
			<Input
				readonly={readonly}
				value={data?.first || ''}
				onChange={handleChangeFirstname}
				placeholder={t('Ваше имя', {ns: 'profile'})}
				data-testid={'ProfileCard.firstname'}
			/>
			<Input
				readonly={readonly}
				value={data?.lastname || ''}
				onChange={handleChangeLastname}
				placeholder={t('Ваша фамилия', {ns: 'profile'})}
				data-testid={'ProfileCard.lastname'}
			/>
			<Input
				readonly={readonly}
				value={data?.city || ''}
				onChange={handleChangeCity}
				placeholder={t('Город', {ns: 'profile'})}
			/>
			<Input
				type={'number'}
				readonly={readonly}
				value={data?.age || ''}
				onChange={handleChangeAge}
				placeholder={t('Возраст', {ns: 'profile'})}
			/>
			<Input
				readonly={readonly}
				value={data?.username || ''}
				onChange={handleChangeUsername}
				placeholder={t('Имя пользователя', {ns: 'profile'})}
			/>
			<Input
				readonly={readonly}
				value={data?.avatar || ''}
				onChange={handleChangeAvatar}
				placeholder={t('Ссылка на аватар', {ns: 'profile'})}
			/>
			<CurrencySelect
				value={data?.currency || Currency.RUB}
				onChange={handleChangeCurrency}
				readonly={readonly}
			/>
			<CountrySelect
				value={data?.country || CountryEnum.Russia}
				onChange={handleChangeCountry}
				readonly={readonly}
			/>
		</VStack>
	)
}