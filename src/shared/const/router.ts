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

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteArticleDetails = (id: string) => `/articles/${id}`
export const getRouteAdmin = () => '/admin'
export const getRouteForbidden = () => '/forbidden'
