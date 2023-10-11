import {memo} from 'react'

import cls from './ThemeSwitcher.module.scss'

import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import {Theme} from '@/shared/const/theme'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTheme} from '@/shared/lib/hooks/useTheme'
import {Button, ButtonTheme} from '@/shared/ui/Button'

interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
	ThemeSwitcher.displayName = 'ThemeSwitcher'
	const {className} = props
	const {theme, toggleTheme} = useTheme()

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			className={classNames('', {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? <DarkIcon className={cls.icon}/> : <LightIcon className={cls.icon}/>}
		</Button>
	)
})