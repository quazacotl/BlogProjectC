import {RoutePath} from 'shared/config/routeConfigTypes'
import HomeIcon from 'shared/assets/icons/home.svg'
import ListIcon from 'shared/assets/icons/list.svg'
import ProfileIcon from 'shared/assets/icons/man.svg'

export interface SidebarItemType {
	path: string,
	text: string,
	Icon: React.FC<React.SVGProps<SVGSVGElement>>,
	authOnly?: boolean
}

export const SidebarItems: SidebarItemType[] = [
	{
		path: RoutePath.main,
		text: 'Главная',
		Icon: HomeIcon
	},
	{
		path: RoutePath.about,
		text: 'О сайте',
		Icon: ListIcon
	},
	{
		path: RoutePath.profile,
		text: 'Профиль',
		Icon: ProfileIcon,
		authOnly: true
	}
]