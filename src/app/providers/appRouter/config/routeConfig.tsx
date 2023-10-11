import {AppRouteProps} from '@/shared/types/routeConfigTypes'
import {MainPage} from '@/pages/MainPage'
import {AboutPage} from '@/pages/AboutPage'
import {NotFoundPage} from '@/pages/NotFoundPage'
import {ProfilePage} from '@/pages/ProfilePage'
import {ArticlesPage} from '@/pages/ArticlesPage'
import {ArticleDetailsPage} from '@/pages/ArticleDetailsPage'
import {AdminPanelPage} from '@/pages/AdminPanelPage'
import {UserRole} from '@/entities/User'
import {ForbiddenPage} from '@/pages/ForbiddenPage'
import {
	AppRoutes,
	getRouteAbout, getRouteAdmin, getRouteArticleDetails,
	getRouteArticles, getRouteForbidden,
	getRouteMain,
	getRouteProfile,
} from '@/shared/const/router'

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <MainPage/>
	},
	[AppRoutes.ABOUT]: {
		path: getRouteAbout(),
		element: <AboutPage/>
	},
	[AppRoutes.PROFILE]: {
		path: getRouteProfile(':id'),
		element: <ProfilePage/> ,
		authOnly: true
	},
	[AppRoutes.ARTICLES]: {
		path: getRouteArticles(),
		element: <ArticlesPage/> ,
		authOnly: true
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: getRouteArticleDetails(':id'),
		element: <ArticleDetailsPage/> ,
		authOnly: true
	},
	[AppRoutes.ADMIN_PANEL]: {
		path: getRouteAdmin(),
		element: <AdminPanelPage/> ,
		authOnly: true,
		roles: [UserRole.MANAGER, UserRole.ADMIN]
	},
	[AppRoutes.FORBIDDEN_PAGE]: {
		path: getRouteForbidden(),
		element: <ForbiddenPage/> ,
	},
	[AppRoutes.NOT_FOUND]: {
		path: '*',
		element: <NotFoundPage/>
	},
}