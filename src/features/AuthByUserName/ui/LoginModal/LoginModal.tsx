// import {classNames} from 'shared/lib/classNames/classNames'
import React, {Suspense} from 'react'

import {LoginFormAsync} from '../LoginForm/LoginForm.async'

import {Loader} from '@/shared/ui/Loader'
import {Modal} from '@/shared/ui/Modal'
import {Portal} from '@/shared/ui/Portal'

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