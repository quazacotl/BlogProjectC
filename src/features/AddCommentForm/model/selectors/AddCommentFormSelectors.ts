import {StateSchema} from '@/app/providers/StoreProvider'
import {buildSelector} from '@/shared/lib/store/index'

export const [useAddCommentFormText, addCommentForm] = buildSelector ((state: StateSchema) => state.addCommentForm?.text ?? '')
export const getAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error
