import React, {memo, useState} from 'react'
import {useSelector} from 'react-redux'

import {getSideBarItems} from '../../model/selectors/getSideBarItems'
import {SidebarItem} from '../SidebarItem/SidebarItem'

import cls from './SideBar.module.scss'

import {LangSwitcher} from '@/features/LangSwitcher'
import {ThemeSwitcher} from '@/features/ThemeSwitcher'
import {classNames} from '@/shared/lib/classNames/classNames'
import {Button, ButtonSize, ButtonTheme} from '@/shared/ui/Button'
import {HStack, VStack} from '@/shared/ui/Stack'

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
		<section data-testid={'sidebar'} className={classNames(cls.sideBar, {[cls.collapsed]: collapsed}, [className])}>
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
			<VStack role={'navigation'} gap={'16'} className={cls.items}>
				{sidebarItems.map(item => <SidebarItem key={item.path} item={item} collapsed={collapsed}/>)}
			</VStack>
			<HStack gap={'16'} justify={'center'} className={cls.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher short={collapsed}/>
			</HStack>
		</section>
	)
})