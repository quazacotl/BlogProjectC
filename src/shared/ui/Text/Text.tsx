import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import {memo} from 'react'


export enum TextTheme {
	'PRIMARY' = 'primary',
	'ERROR' = 'error'
}

export type TextAlign =
	'left' |
	'right' |
	'center'


interface TextProps {
    className?: string,
    title?: string,
    text?: string,
	theme?: TextTheme,
	align?: TextAlign
}
export const Text = memo((props: TextProps) => {
	Text.displayName = 'Text'
	const {className, title, text, theme = TextTheme.PRIMARY, align = 'left'} = props
	return (
		<div className={classNames(cls.text, {}, [className, cls[theme], cls[align]])}>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	)
})