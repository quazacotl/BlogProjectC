import {render, screen} from '@testing-library/react'

import '@testing-library/jest-dom'
import {Button, ButtonTheme} from './Button'

describe('Button', () => {
	test('render', () => {
		render(<Button>asdfgas</Button>)
		expect(screen.getByText('asdfgas')).toBeInTheDocument()
	})
	test('to have classname', () => {
		render(<Button theme={ButtonTheme.CLEAR}>asdfgas</Button>)
		expect(screen.getByText('asdfgas')).toHaveClass(ButtonTheme.CLEAR)
	})
})