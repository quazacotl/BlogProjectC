import {ReactNode, useMemo, useState} from 'react'
import {Theme} from '@/shared/const/theme'
import {LOCAL_STORAGE_THEME_KEY} from '@/shared/const/localStorage'
import { ThemeContext } from '@/shared/lib/context/ThemeContext'


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProvider {
	children: ReactNode
}

const ThemeProvider = ({children}: ThemeProvider) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme)


	const defaultProps = useMemo(() => ({
		theme: theme,
		setTheme
	}), [theme])

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider