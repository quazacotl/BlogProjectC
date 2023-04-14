import {StateSchema} from 'app/providers/StoreProvider'

export const getADRecomIsLoading = (state: StateSchema) => state.articleDetailsPage?.recommendations.isLoading
export const getADRecomError = (state: StateSchema) => state.articleDetailsPage?.recommendations.error