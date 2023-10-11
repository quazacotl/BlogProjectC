import {Suspense, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {AppRouter} from './providers/appRouter'

import {getUserInited, userSlice} from '@/entities/User'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useTheme} from '@/shared/lib/hooks/useTheme'
import {Navbar} from '@/widgets/Navbar'
import {SideBar} from '@/widgets/SideBar'




const App = () => {
	const {theme} = useTheme()
	const dispatch = useDispatch()
	const inited = useSelector(getUserInited)

	useEffect(() => {
		dispatch(userSlice.actions.initAuthData())
	}, [dispatch])

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback={''}>
				<Navbar/>
				<div className="content-page">
					<SideBar/>
					{inited && <AppRouter/>}
				</div>
			</Suspense>
		</div>

	)
}

export default App