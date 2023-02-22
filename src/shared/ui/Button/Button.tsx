import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC} from 'react'

export enum ButtonTheme {
    CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINED = 'outline',
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
	disabled?: boolean
}


export const Button: FC<ButtonProps> = (props) => {
	const {className, children, theme, square, size, disabled, ...rest} = props

	const mods: Record<string, boolean> = {
		[cls.square]: square,
		[cls.disabled]: disabled
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
}