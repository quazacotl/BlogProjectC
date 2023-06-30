import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './ViewSelector.module.scss'
import {ArticleView} from '@/entities/Article'
import ListViewIcon from '@/shared/assets/icons/ListView.svg'
import TileViewIcon from '@/shared/assets/icons/TileView.svg'
import {Button, ButtonTheme} from '@/shared/ui/Button/Button'
import {Icon} from '@/shared/ui/Icon/Icon'

interface ViewSelectorProps {
    className?: string
	view: ArticleView
	onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
	{
		view: ArticleView.SMALL,
		icon: TileViewIcon
	},
	{
		view: ArticleView.BIG,
		icon: ListViewIcon
	}
]
export const ViewSelector = (props: ViewSelectorProps) => {
	const {className, onViewClick, view} = props

	const handleClick = (newView: ArticleView) => () => {
		onViewClick?.(newView)
	}

	return (
		<div className={classNames(cls.viewSelector, {}, [className])}>
			{viewTypes.map(item=> (
				<Button key={item.view} theme={ButtonTheme.CLEAR} onClick={handleClick(item.view)}>
					<Icon Svg={item.icon} className={classNames('', {[cls.notSelected]: item.view !== view}, [cls.icon]) }/>
				</Button>
			))}
		</div>
	)
}