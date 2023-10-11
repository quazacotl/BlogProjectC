import {Suspense, useCallback} from 'react'
import {Route, Routes} from 'react-router-dom'
import {routeConfig} from '../config/routeConfig'
import {RequireAuth} from './RequireAuth'
import {PageLoader} from '@/widgets/PageLoader'
import {AppRouteProps} from '@/shared/types/routeConfigTypes'

export const AppRouter = () => {
	const renderWithWrapper = useCallback((route: AppRouteProps) => {
		const element = (
			<Suspense fallback={<PageLoader/>}>
				{/*<div className="page-wrapper">*/}
				{route.element}
				{/*</div>*/}
			</Suspense>
		)
		return (
			<Route
				key={route.path}
				path={route.path}
				element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
			/>
		)
	}, [])

	return (
		<Routes>
			{Object.values(routeConfig).map(renderWithWrapper)}
		</Routes>
	)
}
