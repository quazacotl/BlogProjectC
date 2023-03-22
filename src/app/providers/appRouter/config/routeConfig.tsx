import {AppRouteProps, AppRoutes, RoutePath} from 'shared/config/routeConfigTypes'
import {MainPage} from 'pages/MainPage'
import {AboutPage} from 'pages/AboutPage'
import {NotFoundPage} from 'pages/NotFoundPage'
import {ProfilePage} from 'pages/ProfilePage'
import {ArticlesPage} from 'pages/ArticlesPage'
import {ArticleDetailsPage} from 'pages/ArticleDetailsPage'

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage/>
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage/>
	},
	[AppRoutes.PROFILE]: {
		path: `${RoutePath.profile}:id`,
		element: <ProfilePage/> ,
		authOnly: true
	},
	[AppRoutes.ARTICLES]: {
		path: RoutePath.articles,
		element: <ArticlesPage/> ,
		authOnly: true
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: `${RoutePath['article-details']}:id`,
		element: <ArticleDetailsPage/> ,
		authOnly: true
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath['*'],
		element: <NotFoundPage/>
	},
}