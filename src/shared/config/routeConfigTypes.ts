export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
	NOT_FOUND = '*'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.NOT_FOUND]: '*'
}
