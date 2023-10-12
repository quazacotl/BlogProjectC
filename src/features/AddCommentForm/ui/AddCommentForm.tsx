import {memo, useCallback} from 'react'
import {useTranslation} from 'react-i18next'

import {
	useAddCommentFormText
} from '../model/selectors/AddCommentFormSelectors'
import {
	addCommentFormReducer,
	useCommentFormActions
} from '../model/slice/AddCommentFormSlice'

import cls from './AddCommentForm.module.scss'

import {classNames} from '@/shared/lib/classNames/classNames'
import {ReducerList, useAddReducer} from '@/shared/lib/hooks/useAddReducer'
import {Button, ButtonTheme} from '@/shared/ui/Button'
import {Input} from '@/shared/ui/Input'
import {HStack} from '@/shared/ui/Stack'

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
	const text = useAddCommentFormText()

	useAddReducer(reducers)
	const {setText} = useCommentFormActions()

	const handleInputText = useCallback((value: string) => {
		setText(value)
	},[setText])

	const handleAddComment = useCallback(() => {
		handleSendComment(text || '')
		handleInputText('')
	}, [handleInputText, handleSendComment, text])


	return (
		<HStack gap={'16'} max justify={'between'} className={classNames(cls.addCommentForm, {}, [className])}>
			<Input className={cls.input} value={text} onChange={handleInputText} placeholder={t('Введите текст комментария')}/>
			<Button onClick={handleAddComment} theme={ButtonTheme.OUTLINED}>{t('Отправить')}</Button>
		</HStack>
	)
})

export default AddCommentForm