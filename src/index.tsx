import './app/styles/index.scss'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import App from './app/App'

import './shared/config/i18n/i18n'
import {ErrorBoundary} from '@/app/providers/ErrorBoundary'
import {StoreProvider} from '@/app/providers/StoreProvider'
import {ThemeProvider} from '@/app/providers/ThemeProvider'


const container = document.getElementById('root')

if (!container) {
	throw new Error('No container found')
}

const root = createRoot(container)

root.render(
	<BrowserRouter>
		<StoreProvider>
			<ErrorBoundary>
				<ThemeProvider>
					<App/>
				</ThemeProvider>
			</ErrorBoundary>
		</StoreProvider>
	</BrowserRouter>
)
export {Theme} from '@/shared/const/theme'