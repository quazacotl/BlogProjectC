import {classNames, Mods} from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import {useTranslation} from 'react-i18next'
import {Text, TextTheme} from 'shared/ui/Text/Text'
import {Input} from 'shared/ui/Input/Input'
import {Profile} from 'features/EditableProfileCard'
import {Loader} from 'shared/ui/Loader'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {Currency, CurrencySelect} from 'entities/Currency'
import {Country} from 'entities/Country/model/consts/country'
import {CountrySelect} from 'entities/Country'
import {HStack, VStack} from 'shared/ui/Stack'

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
	handleChangeCountry?: (country: Country) => void

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
				value={data?.first}
				onChange={handleChangeFirstname}
				placeholder={t('Ваше имя', {ns: 'profile'})}
				data-testid={'ProfileCard.firstname'}
			/>
			<Input
				readonly={readonly}
				value={data?.lastname}
				onChange={handleChangeLastname}
				placeholder={t('Ваша фамилия', {ns: 'profile'})}
				data-testid={'ProfileCard.lastname'}
			/>
			<Input
				readonly={readonly}
				value={data?.city}
				onChange={handleChangeCity}
				placeholder={t('Город', {ns: 'profile'})}
			/>
			<Input
				type={'number'}
				readonly={readonly}
				value={data?.age}
				onChange={handleChangeAge}
				placeholder={t('Возраст', {ns: 'profile'})}
			/>
			<Input
				readonly={readonly}
				value={data?.username}
				onChange={handleChangeUsername}
				placeholder={t('Имя пользователя', {ns: 'profile'})}
			/>
			<Input
				readonly={readonly}
				value={data?.avatar}
				onChange={handleChangeAvatar}
				placeholder={t('Ссылка на аватар', {ns: 'profile'})}
			/>
			<CurrencySelect
				value={data?.currency}
				onChange={handleChangeCurrency}
				readonly={readonly}
			/>
			<CountrySelect
				value={data?.country}
				onChange={handleChangeCountry}
				readonly={readonly}
			/>
		</VStack>
	)
}