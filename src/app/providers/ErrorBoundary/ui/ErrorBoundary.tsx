import React, {ErrorInfo, ReactNode, Suspense} from 'react'
import {PageError} from '@/widgets/PageError'

interface Props {
	children: ReactNode
}

interface State {
	hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.state = { hasError: false }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo)
	}

	render() {
		const {children} = this.props
		const {hasError} = this.state

		if (hasError) {
			return (
				<Suspense fallback={''}>
					<PageError/>
				</Suspense>
			)
		}

		return children
	}
}


export default ErrorBoundary
