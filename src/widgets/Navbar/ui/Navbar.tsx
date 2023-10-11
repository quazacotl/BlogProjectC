import React, {memo, useCallback, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'

import cls from './Navbar.module.scss'

import {getUserAuthData} from '@/entities/User'
import {LoginModal} from '@/features/AuthByUserName'
import {AvatarDropdown} from '@/features/avatarDropdown'
import {NotificationButton} from '@/features/notificationButton'
import {classNames} from '@/shared/lib/classNames/classNames'
import {Button, ButtonTheme} from '@/shared/ui/Button'
import {HStack} from '@/shared/ui/Stack'


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

