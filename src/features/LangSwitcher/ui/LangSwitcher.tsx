import {classNames} from '@/shared/lib/classNames/classNames'
import {useTranslation} from 'react-i18next'
import {Button, ButtonTheme} from '@/shared/ui/Button/Button'
import {memo} from 'react'

interface LangSwitcherProps {
    className?: string,
	short: boolean
}
export const LangSwitcher = memo((props: LangSwitcherProps) => {
	LangSwitcher.displayName = 'LangSwitcher'
	const {className, short} = props
	const {t, i18n} = useTranslation()

	const toggle = async () => i18n.changeLanguage(i18n.language == 'en' ? 'ru' : 'en')

	return (
		<Button
			className={classNames('', {}, [className])}
			theme={ButtonTheme.CLEAR}
			onClick={toggle}
		>
			{t(short ? 'Короткий язык' : 'Язык')}
		</Button>
	)
})