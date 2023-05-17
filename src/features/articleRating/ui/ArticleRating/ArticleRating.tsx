import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useGetArticleRatings, useSetArticleRatings } from '../../api/articleRatingApi';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation('article');

    const userData = useSelector(getUserAuthData);
    const userId = userData?.id || '';

    const { data, isLoading } = useGetArticleRatings({ articleId, userId });

    const [setArticleMutation] = useSetArticleRatings();

    const handleSetRatingArticle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                setArticleMutation({ userId, articleId, rate: starsCount, feedback });
            } catch (err) {
                // handle error
                console.log(err);
            }
        },
        [userId, articleId, setArticleMutation],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleSetRatingArticle(starsCount, feedback);
        },
        [handleSetRatingArticle],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleSetRatingArticle(starsCount);
        },
        [handleSetRatingArticle],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            rate={rating?.rate}
            className={className}
            title={t('article-feedback')}
            feedbackTitle={t('article-feedback-title')}
            hasFeedback
            onAccept={onAccept}
            onCancel={onCancel}
            data-testid="ArticleRating"
        />
    );
});

export default ArticleRating;
