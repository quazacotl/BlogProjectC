import {MutableRefObject, useEffect} from 'react'

export interface UseInfiniteScrollOptions {
	callback?: () => void
	triggerRef: MutableRefObject<HTMLDivElement>
	wrapperRef: MutableRefObject<HTMLDivElement>
}

export function useInfiniteScroll(props: UseInfiniteScrollOptions) {
	const {wrapperRef, triggerRef, callback} = props

	useEffect(() => {
		if (callback) {
			const options = {
				root: wrapperRef.current,
				rootMargin: '0px',
				threshold: 1
			}


			const observer = new IntersectionObserver(([entry])=> {
				if (entry.isIntersecting) {
					callback()
				}
			}, options)

			observer.observe(triggerRef.current)

			return () => {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer && observer.unobserve(triggerRef.current)
			}
		}
	}, [callback, triggerRef, wrapperRef])
}