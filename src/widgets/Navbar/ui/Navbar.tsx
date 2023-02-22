import React, {useCallback, useState} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'
import {LoginModal} from 'features/AuthByUserName'


interface NavbarProps {
    className?: string
}
export const Navbar = (props: NavbarProps) => {
	const {className} = props
	const {t} = useTranslation()
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)


	const onCloseModal = useCallback(() => {
		setIsAuthModalOpen(false)
	}, [])

	const inOpenModal = useCallback(() => {
		setIsAuthModalOpen(true)
	}, [])

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button
				className={cls.links}
				theme={ButtonTheme.CLEAR_INVERTED}
				onClick={inOpenModal}
			>
				{t('Войти')}
			</Button>
			<LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal}/>
		</div>
	)
}

