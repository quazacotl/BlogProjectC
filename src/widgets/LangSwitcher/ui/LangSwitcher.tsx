import {classNames} from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import {useTranslation} from 'react-i18next'
import {Button, ThemeButton} from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string
}
export const LangSwitcher = (props: LangSwitcherProps) => {
	const {className} = props
	const {t, i18n} = useTranslation()

	const toggle = async () => i18n.changeLanguage(i18n.language == 'en' ? 'ru' : 'en')

	return (
		<Button
			className={classNames(cls.langSwitcher, {}, [className])}
			theme={ThemeButton.CLEAR}
			onClick={toggle}
		>
			{t('Язык')}
		</Button>
	)
}