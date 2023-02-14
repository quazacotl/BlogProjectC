import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {Button, ThemeButton} from './Button'

describe('Button', () => {
	test('render', () => {
		render(<Button>asdfgas</Button>)
		expect(screen.getByText('asdfgas')).toBeInTheDocument()
	})
	test('to have classname', () => {
		render(<Button theme={ThemeButton.CLEAR}>asdfgas</Button>)
		expect(screen.getByText('asdfgas')).toHaveClass(ThemeButton.CLEAR)
		screen.debug()
	})
})