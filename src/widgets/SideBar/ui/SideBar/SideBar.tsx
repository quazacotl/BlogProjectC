import {classNames} from 'shared/lib/classNames/classNames'
import cls from './SideBar.module.scss'
import React, {memo, useState} from 'react'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {LangSwitcher} from 'widgets/LangSwitcher'
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button'
import {SidebarItem} from '../SidebarItem/SidebarItem'
import {useSelector} from 'react-redux'
import {getSideBarItems} from '../../model/selectors/getSideBarItems'

interface SideBarProps {
    className?: string
}
export const SideBar = memo((props: SideBarProps) => {
	SideBar.displayName = 'SideBar'
	const {className} = props
	const [collapsed, setCollapsed] = useState(false)
	const sidebarItems = useSelector(getSideBarItems)



	function onToggle() {
		setCollapsed(prev => !prev)
	}


	return (
		<menu data-testid={'sidebar'} className={classNames(cls.sideBar, {[cls.collapsed]: collapsed}, [className])}>
			<Button
				className={cls.collapsedBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				data-testid={'sidebar-toggle'}
				onClick={onToggle}
				square
				size={ButtonSize.XL}
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.items}>
				{sidebarItems.map(item => <SidebarItem key={item.path} item={item} collapsed={collapsed}/>)}
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher short={collapsed}/>
			</div>
		</menu>
	)
})