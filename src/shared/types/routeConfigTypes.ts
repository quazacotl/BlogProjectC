import {RouteProps} from 'react-router-dom'

// eslint-disable-next-line fsd-imports/layer-imports
import {UserRole} from '@/entities/User'

export interface AppRouteProps extends RouteProps {
	authOnly?: boolean
	roles?: UserRole[]
}

