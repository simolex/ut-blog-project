import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { ArticleRatingProps } from './ArticleRating';

const ArticleRatingLazyImport = lazy(() => import('./ArticleRating'));

export const ArticleRatingLazy = (props: ArticleRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height={120} />}>
        <ArticleRatingLazyImport {...props} />
    </Suspense>
);
