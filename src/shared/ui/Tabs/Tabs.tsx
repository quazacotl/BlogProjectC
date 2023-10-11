import {memo, ReactNode, useCallback} from 'react'

import {Card, CardTheme} from '../Card/Card'

import cls from './Tabs.module.scss'

import {classNames} from '@/shared/lib/classNames/classNames'

export interface TabItem {
	value: string
	content: ReactNode
}

interface TabsProps {
    className?: string
	tabs: TabItem[]
	value: string
	onTabClick: (tab: TabItem) => void
}
export const Tabs = memo((props: TabsProps) => {
	Tabs.displayName = 'Tabs'
	const {className, onTabClick, tabs, value} = props

	const handleClick = useCallback((tab: TabItem) => ()  => {
		onTabClick(tab)
	}, [onTabClick])


	return (
		<div className={classNames(cls.tabs, {}, [className])}>
			{tabs.map(tab => (
				<Card
					key={tab.value}
					theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
					className={cls.tab}
					onClick={handleClick(tab)}
				>
					{tab.content}
				</Card>
			))}
		</div>
	)
})