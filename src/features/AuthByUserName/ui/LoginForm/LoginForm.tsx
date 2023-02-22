import {classNames} from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import {useTranslation} from 'react-i18next'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {MemoInput} from 'shared/ui/Input/Input'
import {useDispatch, useSelector} from 'react-redux'
import {loginActions} from '../../model/slice/loginSlice'
import {memo, useCallback} from 'react'
import {getLoginState} from '../../model/selectors/getLoginState/getLoginState'
import {loginByUserName} from '../../model/services/loginByUserName/loginByUserName'
import {Text, TextTheme} from 'shared/ui/Text/Text'
import i18n from 'shared/config/i18n/i18n'


interface LoginFormProps {
    className?: string
}
export const LoginForm = (props: LoginFormProps) => {
	const {className} = props
	const {t} = useTranslation()
	const dispatch = useDispatch()
	const {password, username, isLoading, error} = useSelector(getLoginState)

	const handleUsername = useCallback((value: string) => {
		dispatch(loginActions.setUserName(value))
	}, [dispatch])

	const handlePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value))
	}, [dispatch])


	const handleLogin = useCallback(() => {
		dispatch(loginByUserName({password, username}))
	}, [dispatch, password, username])

	return (
		<div className={classNames(cls.loginForm, {}, [className])}>
			<Text title={t('Форма авторизации')}/>
			{error && <Text text={t('Неверное имя пользователя или пароль')} theme={TextTheme.ERROR}/>}
			<MemoInput value={username} onChange={handleUsername} autoFocus placeholder={t('Введите username')} className={cls.input}/>
			<MemoInput value={password} onChange={handlePassword} placeholder={t('Введите пароль')} className={cls.input}/>
			<Button onClick={handleLogin} disabled={isLoading} className={cls.loginBtn} theme={ButtonTheme.OUTLINED}>{t('Войти')}</Button>
		</div>
	)
}

export const MemoLoginForm = memo(LoginForm)