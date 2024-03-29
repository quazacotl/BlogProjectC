import {ForwardedRef, forwardRef, ReactNode} from 'react'
import {Link, LinkProps} from 'react-router-dom'

import cls from './AppLink.module.scss'

import {classNames} from '@/shared/lib/classNames/classNames'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted'
}

interface AppLinkProps extends LinkProps{
    className?: string,
    theme?: AppLinkTheme,
	children: ReactNode
}
export const AppLink = forwardRef((props: AppLinkProps, ref:ForwardedRef<HTMLAnchorElement>) => {
	AppLink.displayName = 'AppLink'
	const {className, to, children, theme = AppLinkTheme.PRIMARY, ...rest} = props
	return (
		<Link {...rest} to={to} ref={ref} className={classNames(cls.appLink, {}, [className, cls[theme]]) }>
			{children}
		</Link>
	)
})