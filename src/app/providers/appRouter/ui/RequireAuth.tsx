import {useSelector} from 'react-redux'
import {Navigate, useLocation} from 'react-router-dom'
import {getUserAuthData, getUserRoles, UserRole} from 'entities/User'
import {RoutePath} from 'shared/config/routeConfigTypes'
import {useMemo} from 'react'

interface RequireAuthProps {
	children: JSX.Element,
	roles?: UserRole[]
}

export function RequireAuth ({children, roles}: RequireAuthProps) {
	const auth = useSelector(getUserAuthData)
	const location = useLocation()
	const userRoles = useSelector(getUserRoles)

	const getRequiredRoles = useMemo(() => {
		if (!roles) return true

		return roles.some(requiredRole => userRoles?.includes(requiredRole))
	}, [roles, userRoles])

	if (!auth) {
		return <Navigate to={RoutePath.main} state={{from: location}} replace/>
	}

	if (!getRequiredRoles) {
		return <Navigate to={RoutePath['forbidden-page']} state={{from: location}} replace/>
	}

	return children
}