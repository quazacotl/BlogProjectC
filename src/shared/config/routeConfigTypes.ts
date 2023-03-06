import {RouteProps} from 'react-router-dom'

export interface AppRouteProps extends RouteProps {
	authOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
	PROFILE = 'profile',
	NOT_FOUND = '*'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile',
	[AppRoutes.NOT_FOUND]: '*'
}
