import {Story} from '@storybook/react'

export const ThemeDecorator = (Story: Story) => (
	<div className={'app normal'}>
		<Story />
	</div>
)