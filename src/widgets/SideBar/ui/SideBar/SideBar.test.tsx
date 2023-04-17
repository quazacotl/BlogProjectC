import {fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {SideBar} from './SideBar'
import {componentRender} from 'shared/lib/tests/componentRender/componentRender'

describe('Sidebar', () => {
	test('render', () => {
		componentRender(<SideBar/>)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})
	test('toggle', () => {
		componentRender(<SideBar/>)
		const toggleButton = screen.getByTestId('sidebar-toggle')
		fireEvent.click(toggleButton)
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
	})
})