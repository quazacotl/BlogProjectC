import {lazy, Suspense} from 'react'
import {ArticleRatingProps} from './ArticleRating'
import {Skeleton} from '@/shared/ui/Skeleton/Skeleton'

const ArticleRatingLazy = lazy(() => import('./ArticleRating'))

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
	return <Suspense fallback={<Skeleton height={140} width={'100%'}/>}>
		<ArticleRatingLazy{...props} />
	</Suspense>
}