import {AppRoutes, RoutePath} from 'shared/config/routeConfigTypes'
import {RouteProps} from 'react-router-dom'
import {MainPage} from 'pages/MainPage'
import {AboutPage} from 'pages/AboutPage'
import {NotFoundPage} from 'pages/NotFoundPage'
import {ProfilePage} from 'pages/ProfilePage'

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage/>
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage/>
	},
	[AppRoutes.PROFILE]: {
		path: RoutePath.profile,
		element: <ProfilePage/> 
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath['*'],
		element: <NotFoundPage/>
	},
}