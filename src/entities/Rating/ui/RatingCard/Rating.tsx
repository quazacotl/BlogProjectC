import {useTranslation} from 'react-i18next'
import {memo, useCallback, useState} from 'react'
import {HStack, VStack} from '@/shared/ui/Stack'
import {Text} from '@/shared/ui/Text/Text'
import {StarRating} from '@/shared/ui/StarRating/StarRating'
import {Modal} from '@/shared/ui/Modal/Modal'
import {Input} from '@/shared/ui/Input/Input'
import {Button, ButtonTheme} from '@/shared/ui/Button/Button'
import {useDeviceDetect} from '@/shared/lib/hooks/useDeviceDetect'
import {Drawer} from '@/shared/ui/Drawer/Drawer'
import {Card} from '@/shared/ui/Card/Card'

interface RatingProps {
	className?: string
	title?: string
	feedbackTitle?: string
	hasFeedback?: boolean
	onCancel?: (starsCount: number) => void
	onAccept?: (starsCount: number, feedback?: string) => void
	rate?: number
}

export const Rating = memo((props: RatingProps) => {
	Rating.displayName = 'Rating'
	const { className, onCancel, rate = 0, onAccept, hasFeedback, feedbackTitle, title } = props
	const { t } = useTranslation()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [starsCount, setStarsCount] = useState(rate)
	const [feedback, setFeedback] = useState('')
	const {isMobile} = useDeviceDetect()

	const onSelectStars = useCallback((selectedStarsCount: number) => {
		setStarsCount(selectedStarsCount)
		if (hasFeedback) {
			setIsModalOpen(true)
		} else onAccept?.(selectedStarsCount)
	}, [hasFeedback, onAccept])

	const handleAccept = useCallback(() => {
		setIsModalOpen(false)
		onAccept?.(starsCount, feedback)
	}, [feedback, onAccept, starsCount])

	const handleCancel = useCallback(() => {
		setIsModalOpen(false)
		onCancel?.(starsCount)
	}, [onCancel, starsCount])

	const modalContent =  (
		<>
			<Text title={feedbackTitle}/>
			<Input onChange={setFeedback} placeholder={t('Ваш отзыв')}/>
		</>
	)
	
	return (
		<Card max className={className}>
			<VStack align={'center'} gap={'8'}>
				<Text title={rate ? t('Спасибо за отзыв!') : title}/>
				<StarRating selectedStars={rate} size={40} onSelect={onSelectStars}/>
			</VStack>
			{isMobile ? <Drawer isOpen={isModalOpen} onClose={handleCancel} lazy>
				<VStack max gap={'32'}>
					{modalContent}
					<Button fullWidth onClick={handleAccept} >{t('Отправить')}</Button>
				</VStack>

			</Drawer> : <Modal isOpen={isModalOpen} lazy>
				<VStack max gap={'32'}>
					{modalContent}
					<HStack max gap={'16'} justify={'end'}>
						<Button onClick={handleCancel} theme={ButtonTheme.OUTLINED_RED}>{t('Закрыть')}</Button>
						<Button onClick={handleAccept} >{t('Отправить')}</Button>
					</HStack>
				</VStack>
			</Modal> }
		</Card>
	)
})