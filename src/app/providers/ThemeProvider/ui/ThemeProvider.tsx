import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from '../lib/ThemeContext'
import {ReactNode, useMemo, useState} from 'react'


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