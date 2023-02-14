import {fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {SideBar} from 'widgets/SideBar'
import {renderWithTranslation} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
	test('render', () => {
		renderWithTranslation(<SideBar/>)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})
	test('toggle', () => {
		renderWithTranslation(<SideBar/>)
		const toggleButton = screen.getByTestId('sidebar-toggle')
		fireEvent.click(toggleButton)
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
	})
})