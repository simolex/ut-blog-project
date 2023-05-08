import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';

import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { classNames } from '@/shared/lib/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/Stack';
import { PageWrapper } from '@/widgets/PageWrapper';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import styles from './ArticleDetailsPage.module.scss';
import { ArticleRating } from '@/features/articleRating';
import { getFeatureFlags } from '@/shared/lib/features';
import { Counter } from '@/entities/Counter';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { id: articleId } = useParams<{ id: string }>();
    const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled');
    const isCounterEnabled = getFeatureFlags('isCounterEnabled');

    if (!articleId && __PROJECT__ !== 'storybook') {
        return null;
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <PageWrapper className={classNames(styles.articleDetailsPage, {}, [className])}>
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={articleId} />
                    {isArticleRatingEnabled && <ArticleRating articleId={articleId ?? ''} />}
                    {isCounterEnabled && <Counter />}
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={articleId} />
                </VStack>
            </PageWrapper>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
