import {classNames} from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import {useTranslation} from 'react-i18next'
import {Button} from 'shared/ui/Button/Button'
import {MemoInput} from 'shared/ui/Input/Input'

interface LoginFormProps {
    className?: string
}
export const LoginForm = (props: LoginFormProps) => {
	const {className} = props
	const {t} = useTranslation()

	return (
		<div className={classNames(cls.loginForm, {}, [className])}>
			<MemoInput autoFocus placeholder={t('Введите username')} className={cls.input}/>
			<MemoInput placeholder={t('Введите пароль')} className={cls.input}/>
			<Button className={cls.loginBtn}>{t('Войти')}</Button>
		</div>
	)
}