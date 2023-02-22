import React, {useCallback, useState} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'
import {LoginModal} from 'features/AuthByUserName'
import {getUserAuthData, userActions} from 'entities/User'
import {useDispatch, useSelector} from 'react-redux'


interface NavbarProps {
    className?: string
}
export const Navbar = (props: NavbarProps) => {
	const {className} = props
	const {t} = useTranslation()
	const authData = useSelector(getUserAuthData)
	const dispatch = useDispatch()
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)


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
				<Button
					className={cls.links}
					theme={ButtonTheme.CLEAR_INVERTED}
					onClick={logoutHandler}
				>
					{t('Выйти')}
				</Button>
			</div>
		)
	}

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button
				className={cls.links}
				theme={ButtonTheme.CLEAR_INVERTED}
				onClick={openModalHandler}
			>
				{t('Войти')}
			</Button>
			<LoginModal isOpen={isAuthModalOpen} onClose={onCloseModalHandler}/>
		</div>
	)
}

