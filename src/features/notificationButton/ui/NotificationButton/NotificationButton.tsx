import React, {memo, useState} from 'react'

import cls from './NotificationButton.module.scss'

import { NotificationList } from '@/entities/Notification'
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import {useDeviceDetect} from '@/shared/lib/hooks/useDeviceDetect'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import {Drawer} from '@/shared/ui/Drawer'
import { Icon } from '@/shared/ui/Icon'
import { Popover } from '@/shared/ui/Popups'

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
