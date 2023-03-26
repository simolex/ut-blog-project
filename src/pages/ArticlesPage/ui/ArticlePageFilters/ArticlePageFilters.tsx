import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    ArticleSortField,
    ArticleSortSelector,
    ArticleView,
    ArticleViewSelector,
} from 'entities/Article';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { classNames, Mods } from 'shared/lib/classNames';
import { SortOrder } from 'shared/types';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articlePageActions } from '../../model/slices/articlePageSlice';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import styles from './ArticlePageFilters.module.scss';

interface ArticlePageFiltersProps {
    className?: string;
}

export const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const mods: Mods = {};

    const dispatch = useAppDispatch();
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);

    const view = useSelector(getArticlesPageView);

    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlePageActions.setOrder(newOrder));
        },
        [dispatch],
    );

    const onChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlePageActions.setSort(newSort));
        },
        [dispatch],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlePageActions.setSearch(search));
        },
        [dispatch],
    );

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view));
        },
        [dispatch],
    );

    return (
        <div className={classNames(styles.articlePageFilters, {}, [className])}>
            <div className={styles.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={styles.search}>
                <Input placeholder={t('article-search')} onChange={onChangeSearch} value={search} />
            </Card>
        </div>
    );
});
