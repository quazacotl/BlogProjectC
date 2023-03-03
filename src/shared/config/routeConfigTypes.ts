
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
