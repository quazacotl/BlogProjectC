import {classNames} from 'shared/lib/classNames/classNames'
import cls from './SideBar.module.scss'
import React, {useState} from 'react'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {LangSwitcher} from 'widgets/LangSwitcher'
import {useTranslation} from 'react-i18next'

interface SideBarProps {
    className?: string
}
export const SideBar = (props: SideBarProps) => {
	const {className} = props
	const [collapsed, setCollapsed] = useState(false)
	const {t} = useTranslation()



	function onToggle() {
		setCollapsed(prev => !prev)
	}


	return (
		<div data-testid={'sidebar'} className={classNames(cls.sideBar, {[cls.collapsed]: collapsed}, [className])}>
			<button data-testid={'sidebar-toggle'} onClick={onToggle}>{t('Переключить')}</button>
			<div className={cls.switchers}>

				<ThemeSwitcher/>
				<LangSwitcher/>
			</div>
		</div>
	)
}