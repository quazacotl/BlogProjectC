import {classNames} from 'shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import {Input} from 'shared/ui/Input/Input'
import {useTranslation} from 'react-i18next'
import {Button, ButtonTheme} from 'shared/ui/Button/Button'
import {ReducerList, useAddReducer} from 'shared/lib/hooks/useAddReducer'
import {useSelector} from 'react-redux'
import {
	getAddCommentFormError,
	getAddCommentFormText
} from '../model/selectors/AddCommentFormSelectors'
import {memo, useCallback} from 'react'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {addCommentFormActions, addCommentFormReducer} from '../model/slice/AddCommentFormSlice'

interface AddCommentFormProps {
    className?: string
	handleSendComment: (text: string) => void
}

const reducers: ReducerList = {
	addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
	AddCommentForm.displayName = 'AddCommentForm'
	const {className, handleSendComment} = props
	const {t} = useTranslation()
	const text = useSelector(getAddCommentFormText)
	const error = useSelector(getAddCommentFormError)
	const dispatch = useAppDispatch()
	useAddReducer(reducers)

	const handleInputText = useCallback((value: string) => {
		dispatch(addCommentFormActions.setText(value))
	},[dispatch])

	const handleAddComment = useCallback(() => {
		handleSendComment(text || '')
		handleInputText('')
	}, [handleInputText, handleSendComment, text])


	return (
		<div className={classNames(cls.addCommentForm, {}, [className])}>
			<Input className={cls.input} value={text} onChange={handleInputText} placeholder={t('Введите текст комментария')}/>
			<Button onClick={handleAddComment} theme={ButtonTheme.OUTLINED}>{t('Отправить')}</Button>
		</div>
	)
})

export default AddCommentForm