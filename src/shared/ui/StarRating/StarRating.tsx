import {memo, useState} from 'react'
import {Icon} from '../Icon/Icon'
import cls from './StarRating.module.scss'
import {classNames} from '@/shared/lib/classNames/classNames'
import StarIcon from '@/shared/assets/icons/star.svg'

interface StarRatingProps {
    className?: string,
	onSelect?: (starsCount: number) => void
	size?: number
	selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating = memo((props: StarRatingProps) => {
	StarRating.displayName = 'StarRating'
	const {className, selectedStars = 0, size = 30, onSelect} = props
	const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
	const [isSelected, setIsSelected] = useState(Boolean(selectedStars))

	const onHover = (starsCount: number) => () => {
		if (!isSelected) {
			setCurrentStarsCount(starsCount)
		}
	}

	const onLeave = () => {
		if (!isSelected) {
			setCurrentStarsCount(0)
		}
	}

	const onClick = (starsCount: number) => () => {
		if (!isSelected) {
			onSelect?.(starsCount)
			setCurrentStarsCount(starsCount)
			setIsSelected(true)
		}
	}


	return (
		<div className={classNames(cls.starRating, {}, [className])}>
			{stars.map(starNumber => (
				<Icon
					height={size}
					width={size}
					className={classNames(cls.starIcon, {[cls.hovered]: currentStarsCount >= starNumber, [cls.selected]: isSelected}, [])}
					Svg={StarIcon}
					key={starNumber}
					onMouseEnter={onHover(starNumber)}
					onMouseLeave={onLeave}
					onClick={onClick(starNumber)}
				/>
			))}
		</div>
	)
})