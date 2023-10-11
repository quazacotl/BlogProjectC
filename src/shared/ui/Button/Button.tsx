import {ButtonHTMLAttributes, memo, ReactNode} from 'react'
import cls from './Button.module.scss'
import {classNames, Mods} from '@/shared/lib/classNames/classNames'

export enum ButtonTheme {
    CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINED = 'outline',
	OUTLINED_RED = 'outline-red',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: ButtonTheme,
	square?: boolean,
	size?: ButtonSize,
	disabled?: boolean,
	children: ReactNode
	fullWidth?: boolean
}


export const Button = memo((props: ButtonProps) => {
	Button.displayName = 'Button'
	const {className, children, fullWidth, theme = ButtonTheme.OUTLINED, square, size = ButtonSize.M, disabled, ...rest} = props

	const mods: Mods = {
		[cls.square]: square,
		[cls.disabled]: disabled,
		[cls.fullWidth]: fullWidth
	}

	return (
		<button
			{...rest}
			type={'button'}
			disabled={disabled}
			className={classNames(cls.button, mods, [className, cls[theme], cls[size]])}
		>
			{children}
		</button>
	)
})