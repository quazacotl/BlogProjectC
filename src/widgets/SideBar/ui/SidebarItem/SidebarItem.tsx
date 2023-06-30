import cls from './SidebarItem.module.scss'
import {AppLink, AppLinkTheme} from '@/shared/ui/AppLink/AppLink'
import React, {memo} from 'react'
import {useTranslation} from 'react-i18next'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useSelector} from 'react-redux'
import {getUserAuthData} from '@/entities/User'
import {SidebarItemType} from '../../model/types/sideBar'

interface SidebarItemProps {
    item: SidebarItemType
	collapsed: boolean
}
export const SidebarItem = memo((props: SidebarItemProps) => {
	SidebarItem.displayName = 'SidebarItem'
	const {item, collapsed} = props
	const {t} = useTranslation()
	const isAuth = useSelector(getUserAuthData)

	if (item.authOnly && !isAuth) {
		return null
	}


	return (
		<AppLink theme={AppLinkTheme.INVERTED} to={item.path} className={classNames(cls.item, {[cls.collapsed]: collapsed})}>
			<item.Icon className={cls.icon}/>
			<span className={cls.linkName}>{t(item.text)}</span>
		</AppLink>
	)
})