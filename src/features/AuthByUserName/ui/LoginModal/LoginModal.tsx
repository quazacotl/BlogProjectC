// import {classNames} from 'shared/lib/classNames/classNames'
import {Modal} from 'shared/ui/Modal/Modal'
import { MemoLoginForm} from '../LoginForm/LoginForm'
import {Portal} from 'shared/ui/Portal/Portal'
import React from 'react'

interface LoginModalProps {
    className?: string,
	isOpen: boolean,
	onClose: () => void
}
export const LoginModal = (props: LoginModalProps) => {
	const {isOpen, onClose} = props
	return (
		<Portal>
			<Modal
				lazy
				isOpen={isOpen}
				onClose={onClose}
				// className={classNames(cls.loginModal, {}, [className])}
			>
				<MemoLoginForm/>
			</Modal>
		</Portal>

	)
}