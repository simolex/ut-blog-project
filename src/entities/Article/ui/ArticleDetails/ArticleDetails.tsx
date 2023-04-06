import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames, Mods } from 'shared/lib/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { Icon } from 'shared/ui/Icon/Icon';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { HStack, VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';

import EyeIcon from 'shared/assets/icons/eye-20x20.svg';
import DateLine from 'shared/assets/icons/date-line-20x20.svg';

import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import styles from './ArticleDetails.module.scss';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        key={block.id}
                        block={block}
                        className={styles.block}
                    />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        key={block.id}
                        block={block}
                        className={styles.block}
                    />
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        key={block.id}
                        block={block}
                        className={styles.block}
                    />
                );
            default:
                return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={styles.avatar} width={150} height={150} border="50%" />
                <Skeleton width="50%" height={32} />
                <Skeleton width="80%" height={24} />
                <Skeleton width="100%" height={130} />
                <Skeleton width="100%" height={180} />
                <Skeleton width="100%" height={150} />
            </>
        );
    } else if (error) {
        content = <Text align={TextAlign.CENTER} title={t('article-loading-error')} />;
    } else {
        content = (
            <>
                <HStack justify="center" max>
                    <Avatar size={150} src={data?.img} className={styles.avatar} />
                </HStack>
                <VStack gap="4">
                    <Text title={data?.title} text={data?.subtitle} size={TextSize.L} />
                    <HStack gap="8">
                        <Icon Svg={EyeIcon} />
                        <Text text={String(data?.views)} />
                    </HStack>
                    <HStack gap="8">
                        <Icon Svg={DateLine} />
                        <Text text={data?.createdAt} />
                    </HStack>
                </VStack>
                {data?.blocks?.map(renderBlock)}
            </>
        );
    }

    const mods: Mods = {};

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap="16" className={classNames(styles.articleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
