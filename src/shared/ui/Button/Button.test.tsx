import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {Button} from './Button'

describe('Button', () => {
	test('render', () => {
		render(<Button>asdfgas</Button>)
		expect(screen.findAllByText('asdfgas')).toBeInTheDocument()
	})

})