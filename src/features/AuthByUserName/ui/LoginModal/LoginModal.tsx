// import {classNames} from 'shared/lib/classNames/classNames'
import {Modal} from 'shared/ui/Modal/Modal'
import {Portal} from 'shared/ui/Portal/Portal'
import React, {Suspense} from 'react'
import {Loader} from 'shared/ui/Loader'
import {LoginFormAsync} from '../LoginForm/LoginForm.async'

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
				<Suspense fallback={<Loader/>}>
					<LoginFormAsync onSuccess={onClose}/>
				</Suspense>
			</Modal>
		</Portal>

	)
}