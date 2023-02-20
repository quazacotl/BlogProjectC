import React, {useCallback, useState} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {useTranslation} from 'react-i18next'
import {Modal} from 'shared/ui/Modal/Modal'
import {Portal} from 'shared/ui/Portal/Portal'


interface NavbarProps {
    className?: string
}
export const Navbar = (props: NavbarProps) => {
	const {className} = props
	const {t} = useTranslation()
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)


	const inToggleModal = useCallback(() => {
		setIsAuthModalOpen(prevState => !prevState)
	}, [])

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button
				className={cls.links}
				theme={ButtonTheme.CLEAR_INVERTED}
				onClick={inToggleModal}
			>
				{t('Войти')}
			</Button>

			<Portal>
				{/* eslint-disable-next-line i18next/no-literal-string */}
				<Modal isOpen={isAuthModalOpen} onClose={inToggleModal}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ea eos esse fuga, iste mollitia nobis numquam porro quaerat repellendus veritatis voluptate. Delectus exercitationem expedita nobis nostrum provident quos tenetur!
				</Modal>
			</Portal>
		</div>
	)
}

