import {MutableRefObject, ReactNode, useRef, UIEvent} from 'react'
import {useLocation} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {GetScrollPositionPageActions} from '../../GetScrollPosition/model/slices/GetScrollPositionSlice'
import {getScrollByPath} from '../../GetScrollPosition/model/selectors/GetScrollPositionSelector'
import cls from './Page.module.scss'
import {classNames} from '@/shared/lib/classNames/classNames'
import {useInfiniteScroll} from '@/shared/lib/hooks/useInfiniteScroll'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch'
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect'
import {StateSchema} from '@/app/providers/StoreProvider'
import {useThrottle} from '@/shared/lib/hooks/useThrottle'

interface PageProps {
    className?: string
	children: ReactNode
	onScrollEnd?: () => void
}
export const Page = (props: PageProps) => {
	const {className, children, onScrollEnd} = props
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement >
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement >
	const dispatch = useAppDispatch()
	const {pathname} = useLocation()
	const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname))


	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd
	})



	const handleScroll = useThrottle((e: UIEvent<HTMLElement>) => {
		dispatch(GetScrollPositionPageActions.setScrollPosition({
			position: e.currentTarget.scrollTop,
			path: pathname
		}))
	}, 500)

	useInitialEffect(() => {
		wrapperRef.current.scrollTop = scrollPosition
	})

	return (
		<main
			onScroll={handleScroll}
			ref={wrapperRef} className={classNames(cls.page, {}, [className])}>
			{children}
			{onScrollEnd &&  <div className={cls.trigger} ref={triggerRef}/>}
		</main>
	)
}