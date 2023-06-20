import React, {memo, useCallback, useState} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'
import {LoginModal} from 'features/AuthByUserName'
import {getUserAuthData, isUserAdmin, isUserManager, userActions} from 'entities/User'
import {useDispatch, useSelector} from 'react-redux'
import {Dropdown} from 'shared/ui/Dropdown/Dropdown'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {RoutePath} from 'shared/config/routeConfigTypes'


interface NavbarProps {
    className?: string
}
export const Navbar = memo((props: NavbarProps) => {
	Navbar.displayName = 'Navbar'
	const {className} = props
	const {t} = useTranslation()
	const authData = useSelector(getUserAuthData)
	const dispatch = useDispatch()
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
	const isAdmin = useSelector(isUserAdmin)
	const isManager = useSelector(isUserManager)

	const isAdminAvailable = isAdmin || isManager


	const onCloseModalHandler = useCallback(() => {
		setIsAuthModalOpen(false)
	}, [])

	const openModalHandler = useCallback(() => {
		setIsAuthModalOpen(true)
	}, [])

	const logoutHandler = useCallback(() => {
		dispatch(userActions.logout())
	}, [dispatch])

	if (authData) {
		return (
			<div className={classNames(cls.navbar, {}, [className])}>
				<Dropdown
					direction={'bottom left'}
					className={cls.dropdown}
					items={[
						{content: t('Выйти'), onClick: logoutHandler},
						{content: t('Профиль'), href: RoutePath.profile + authData.id},
						...(isAdminAvailable ? [{content: t('Админка'), href: RoutePath['admin-panel']}] : [])
					]}
					trigger={<Avatar size={30} src={authData.avatar}/>}
				/>
			</div>
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
			<LoginModal isOpen={isAuthModalOpen} onClose={onCloseModalHandler}/>
		</header>
	)
})

