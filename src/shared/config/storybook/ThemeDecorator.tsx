import {Story} from '@storybook/react'
import {Suspense} from 'react'

export const ThemeDecorator = (Story: Story) => (
	<div className={'app normal'}>
		<Suspense fallback={''}>
			<Story />
		</Suspense>
	</div>
)