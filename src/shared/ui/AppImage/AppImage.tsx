import {ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState} from 'react'

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement>{
	className?: string;
	fallback?: ReactElement
	errorFallback?: ReactElement
	src?: string
	alt?: string
}

export const AppImage = memo((props: AppImageProps) => {
	AppImage.displayName = 'AppImage'
	const {className, alt, src, fallback, errorFallback, ...rest} = props

	const [isLoading, setIsLoading] = useState(true)
	const [hasError, setHasError] = useState(false)

	useLayoutEffect(() => {
		const img = new Image()
		img.src = src ?? ''
		img.onload = () => setIsLoading(false)
		img.onerror = () => {
			setIsLoading(false)
			setHasError(true)
		}
	}, [src])

	if (isLoading && fallback) {
		return fallback
	}

	if (hasError && errorFallback) {
		return errorFallback
	}

	return (
		<img src={src} alt={alt} className={className} {...rest}/>
	)
})