import {classNames} from 'shared/lib/classNames/classNames'
import cls from './SideBar.module.scss'
import React, {useState} from 'react'
import {ThemeSwitcher} from 'widgets/ThemeSwitcher'
import {LangSwitcher} from 'widgets/LangSwitcher'
import {useTranslation} from 'react-i18next'
import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button/Button'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'
import {RoutePath} from 'shared/config/routeConfigTypes'
import HomeIcon from 'shared/assets/icons/home.svg'
import ListIcon from 'shared/assets/icons/list.svg'

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
				<AppLink  theme={AppLinkTheme.INVERTED} to={RoutePath.main}>
					<div className={cls.item}>
						<HomeIcon className={cls.icon}/>
						<span className={cls.linkName}>{t('Главная')}</span>
					</div>
				</AppLink>
				<AppLink theme={AppLinkTheme.INVERTED} to={RoutePath.about}>
					<div className={cls.item}>
						<ListIcon className={cls.icon}/>
						<span className={cls.linkName}>{t('О нас')}</span>
					</div>
				</AppLink>
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher short={collapsed}/>
			</div>
		</div>
	)
}