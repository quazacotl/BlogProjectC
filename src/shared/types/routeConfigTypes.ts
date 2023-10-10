import {RouteProps} from 'react-router-dom'
import {UserRole} from '@/entities/User'

export interface AppRouteProps extends RouteProps {
	authOnly?: boolean
	roles?: UserRole[]
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
	PROFILE = 'profile',
	ARTICLES = 'articles',
	ARTICLE_DETAILS = 'article-details',
	ADMIN_PANEL = 'admin-panel',
	FORBIDDEN_PAGE = 'forbidden-page',


	NOT_FOUND = '*'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile/',  // + id
	[AppRoutes.ARTICLES]: '/articles',
	[AppRoutes.ARTICLE_DETAILS]: '/articles/', // + id
	[AppRoutes.ADMIN_PANEL]: '/admin',
	[AppRoutes.FORBIDDEN_PAGE]: '/forbidden',
	[AppRoutes.NOT_FOUND]: '*'
}
