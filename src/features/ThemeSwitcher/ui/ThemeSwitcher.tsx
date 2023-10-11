import {classNames} from '@/shared/lib/classNames/classNames'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import {Button, ButtonTheme} from '@/shared/ui/Button'
import cls from './ThemeSwitcher.module.scss'
import {memo} from 'react'
import {Theme} from '@/shared/const/theme'
import {useTheme} from '@/shared/lib/hooks/useTheme'

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