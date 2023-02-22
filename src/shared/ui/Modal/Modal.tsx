import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import {FC, ReactNode, useCallback, useEffect, useRef, useState} from 'react'

interface ModalProps {
	className?: string,
	children?: ReactNode,
	isOpen?: boolean,
	onClose?: () => void,
	lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = (props) => {
	const {className, children, isOpen, onClose, lazy} = props

	const [isClosing, setIsClosing] = useState(false)
	const [mounted, setMounted] = useState(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()


	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing
	}

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [onClose])

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		e.key === 'Escape' && closeHandler()
	}, [closeHandler])

	useEffect(() => {
		isOpen && window.addEventListener('keydown', onKeyDown)
		return () => {
			clearTimeout(timerRef.current)
			removeEventListener('keydown', onKeyDown)
		}
	}, [isOpen, onKeyDown])

	useEffect(() => {
		isOpen && setMounted(true)
	}, [isOpen])

	if (lazy && !mounted) {
		return null
	}

	return (
		<div className={classNames(cls.modal, mods, [className]) }>
			<div className={cls.overlay} onClick={closeHandler}>
				<div className={cls.content} onClick={(e) => e.stopPropagation()}>
					{children}
				</div>
			</div>
		</div>
	)
}