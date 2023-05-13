import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ArticleDetails } from '@/entities/Article';

import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { classNames } from '@/shared/lib/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/Stack';
import { PageWrapper } from '@/widgets/PageWrapper';
import { ArticleRating } from '@/features/articleRating';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slice';
import styles from './ArticleDetailsPage.module.scss';
import { Card } from '@/shared/ui/Card';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id: articleId } = useParams<{ id: string }>();

    if (!articleId && __PROJECT__ !== 'storybook') {
        return null;
    }

    // const articleRatingCard = toggleFeatures({
    //     name: 'isArticleRatingEnabled',
    //     on: () => <ArticleRating articleId={articleId ?? ''} />,
    //     // eslint-disable-next-line i18next/no-literal-string
    //     off: () => <Card>Ждите обновление</Card>,
    // });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <PageWrapper className={classNames(styles.articleDetailsPage, {}, [className])}>
                <VStack gap="16" max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={articleId} />
                    <ToggleFeatures
                        feature="isArticleRatingEnabled"
                        on={<ArticleRating articleId={articleId ?? ''} />}
                        off={<Card>{t('wait-article-raiting')}</Card>}
                    />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={articleId} />
                </VStack>
            </PageWrapper>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
