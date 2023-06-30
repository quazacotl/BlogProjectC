import {createSelector} from '@reduxjs/toolkit'
import {getUserAuthData} from '@/entities/User'
import {RoutePath} from '@/shared/config/routeConfigTypes'
import HomeIcon from '@/shared/assets/icons/home.svg'
import ListIcon from '@/shared/assets/icons/list.svg'
import ProfileIcon from '@/shared/assets/icons/man.svg'
import ArticlesIcon from '@/shared/assets/icons/page.svg'
import {SidebarItemType} from '../../model/types/sideBar'

export const getSideBarItems = createSelector(getUserAuthData, (userData) => {
	const sidebarItems: SidebarItemType[] = [
		{
			path: RoutePath.main,
			text: 'Главная',
			Icon: HomeIcon
		},
		{
			path: RoutePath.about,
			text: 'О сайте',
			Icon: ListIcon
		}
	]

	if (userData) {
		sidebarItems.push({
			path: `${RoutePath.profile}${userData.id}`,
			text: 'Профиль',
			Icon: ProfileIcon,
			authOnly: true
		},
		{
			path: RoutePath.articles,
			text: 'Статьи',
			Icon: ArticlesIcon,
			authOnly: true
		})
	}

	return sidebarItems
})