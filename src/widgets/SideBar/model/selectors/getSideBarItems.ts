import {createSelector} from '@reduxjs/toolkit'

import {SidebarItemType} from '../../model/types/sideBar'

import {getUserAuthData} from '@/entities/User'
import HomeIcon from '@/shared/assets/icons/home.svg'
import ListIcon from '@/shared/assets/icons/list.svg'
import ProfileIcon from '@/shared/assets/icons/man.svg'
import ArticlesIcon from '@/shared/assets/icons/page.svg'
import {getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile} from '@/shared/const/router'

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
	const sidebarItems: SidebarItemType[] = [
		{
			path: getRouteMain(),
			text: 'Главная',
			Icon: HomeIcon
		},
		{
			path: getRouteAbout(),
			text: 'О сайте',
			Icon: ListIcon
		}
	]

	if (userData) {
		sidebarItems.push({
			path: getRouteProfile(userData.id),
			text: 'Профиль',
			Icon: ProfileIcon,
			authOnly: true
		},
		{
			path: getRouteArticles(),
			text: 'Статьи',
			Icon: ArticlesIcon,
			authOnly: true
		})
	}

	return sidebarItems
})