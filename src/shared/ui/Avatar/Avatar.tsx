import {CSSProperties, useMemo} from 'react'

import {AppImage} from '../AppImage/index'
import {Icon} from '../Icon/index'
import {Skeleton} from '../Skeleton/index'

import cls from './Avatar.module.scss'

import UserIcon from '@/shared/assets/icons/profile.svg'
import {classNames} from '@/shared/lib/classNames/classNames'


interface AvatarProps {
    className?: string,
	src?: string,
	alt?: string,
	size?: number
	fallbackInverted?: boolean
}
export const Avatar = (props: AvatarProps) => {
	const {className, fallbackInverted, src, alt, size = 100} = props

	const styles = useMemo<CSSProperties>(() => {
		return {
			width: size,
			height: size
		}
	}, [size])

	const fallback = <Skeleton width={size} height={size} border={'50%'}/>
	const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon}/>

	return (
		<AppImage fallback={fallback} errorFallback={errorFallback} className={classNames(cls.avatar, {}, [className])} src={src} alt={alt} style={styles}/>
	)
}