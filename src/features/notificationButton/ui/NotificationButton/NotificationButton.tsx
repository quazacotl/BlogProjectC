import { classNames } from '@/shared/lib/classNames/classNames'
import React, {memo, useState} from 'react'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg'
import { NotificationList } from '@/entities/Notification'
import { Popover } from '@/shared/ui/Popups'
import cls from './NotificationButton.module.scss'
import {useDeviceDetect} from '@/shared/lib/hooks/useDeviceDetect'
import {Drawer} from '@/shared/ui/Drawer/Drawer'

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
	NotificationButton.displayName = 'NotificationButton'
	const { className } = props
	const {isMobile} = useDeviceDetect()
	const [isOpen, setIsOpen] = useState(false)

	const trigger = (
		<Button onClick={() => setIsOpen(true)} theme={ButtonTheme.CLEAR}>
			<Icon className={cls.icon} Svg={NotificationIcon} inverted />
		</Button>
	)

	if (isMobile) {
		return (
			<>
				{trigger}
				<Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
					<NotificationList/>
				</Drawer>
			</>
		)
	} else {
		return (
			<Popover
				className={classNames('', {}, [className])}
				direction="bottom left"
				trigger={trigger}
			>
				<NotificationList className={cls.notifications} />
			</Popover>
		)
	}
})
