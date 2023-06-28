import React, {memo, useCallback, useState} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'
import {LoginModal} from 'features/AuthByUserName'
import {getUserAuthData} from 'entities/User'
import {useSelector} from 'react-redux'
import {HStack} from 'shared/ui/Stack'
import {NotificationButton} from 'features/notificationButton'
import {AvatarDropdown} from 'features/avatarDropdown'


interface NavbarProps {
    className?: string
}
export const Navbar = memo((props: NavbarProps) => {
	Navbar.displayName = 'Navbar'
	const {className} = props
	const {t} = useTranslation()
	const authData = useSelector(getUserAuthData)
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)


	const onCloseModalHandler = useCallback(() => {
		setIsAuthModalOpen(false)
	}, [])

	const openModalHandler = useCallback(() => {
		setIsAuthModalOpen(true)
	}, [])


	if (authData) {
		return (
			<header className={classNames(cls.navbar, {}, [className])}>
				<HStack gap="16" className={cls.actions}>
					<NotificationButton />
					<AvatarDropdown />
				</HStack>
			</header>
		)
	}

	return (
		<header className={classNames(cls.navbar, {}, [className])}>
			<Button
				className={cls.links}
				theme={ButtonTheme.CLEAR_INVERTED}
				onClick={openModalHandler}
			>
				{t('Войти')}
			</Button>
			{isAuthModalOpen && (
				<LoginModal
					isOpen={isAuthModalOpen}
					onClose={onCloseModalHandler}
				/>
			)}
		</header>
	)
})

