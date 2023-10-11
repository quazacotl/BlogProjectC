import {FC} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import {useTranslation} from 'react-i18next'
import {Button} from '@/shared/ui/Button'

interface PageErrorProps {
	className?: string,
}

const reloadPage = () => {
	location.reload()
}

export const PageError: FC<PageErrorProps> = (props) => {
	const {className} = props
	const {t} = useTranslation()

	return (
		<div className={classNames(cls.pageError, {}, [className]) }>
			<p>{t('Произошла непредвиденная ошибка')}</p>
			<Button onClick={reloadPage}>
				{t('Обновить страницу')}
			</Button>
		</div>
	)
}