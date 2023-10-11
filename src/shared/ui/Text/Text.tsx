import {memo} from 'react'
import cls from './Text.module.scss'
import {classNames} from '@/shared/lib/classNames/classNames'


export enum TextTheme {
	'PRIMARY' = 'primary',
	'ERROR' = 'error'
}

export type TextAlign =
	'left' |
	'right' |
	'center'

export enum TextSize {
	M = 'size_m',
	L = 'size_l',
}


interface TextProps {
    className?: string,
    title?: string,
    text?: string,
	theme?: TextTheme,
	align?: TextAlign,
	size?: TextSize
	'data-testid'?: string
}
export const Text = memo((props: TextProps) => {
	Text.displayName = 'Text'
	const {className, 'data-testid': dataTestId = 'Text', title, text, theme = TextTheme.PRIMARY, align = 'left', size = TextSize.M} = props
	return (
		<div className={classNames(cls.text, {}, [className, cls[theme], cls[align], cls[size]])}>
			{title && <p className={cls.title} data-testid={`${dataTestId}.Header`}>{title}</p>}
			{text && <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>{text}</p>}
		</div>
	)
})