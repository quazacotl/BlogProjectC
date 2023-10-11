import {CSSProperties, useMemo} from 'react'

import cls from './Avatar.module.scss'

import {classNames} from '@/shared/lib/classNames/classNames'

interface AvatarProps {
    className?: string,
	src?: string,
	alt?: string,
	size?: number
}
export const Avatar = (props: AvatarProps) => {
	const {className, src, alt, size = 100} = props

	const styles = useMemo<CSSProperties>(() => {
		return {
			width: size,
			height: size
		}
	}, [size])

	return (
		<img className={classNames(cls.avatar, {}, [className])} src={src} alt={alt} style={styles}/>
	)
}