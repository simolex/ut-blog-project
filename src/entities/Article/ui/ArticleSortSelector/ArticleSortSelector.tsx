import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames';
import { SortOrder } from '@/shared/types';
import { Select, SelectOption } from '@/shared/ui/Select/Select';
import { ArticleSortField } from '../../model/types/article';
import styles from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation('article');

    // Object.entries(Country).forEach(([key, enumValue]) => {
    //     options.push({ value: key, content: enumValue });
    // });

    const fieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('article-create-at'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('article-by-title'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('article-by-views'),
            },
        ],
        [t],
    );

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('article-dir-asc'),
            },
            {
                value: 'desc',
                content: t('article-dir-desc'),
            },
        ],
        [t],
    );

    // const changeSortHandler = useCallback(
    //     (newSort: string) => {
    //         onChangeSort(newSort as ArticleSortField);
    //     },
    //     [onChangeSort],
    // );

    // const changeOrderHandler = useCallback(
    //     (newOrder: string) => {
    //         onChangeOrder(newOrder as SortOrder);
    //     },
    //     [onChangeOrder],
    // );

    return (
        <div className={classNames(styles.articleSortSelector, {}, [className])}>
            <Select
                label={t('article-sort-by')}
                options={fieldOptions}
                valueSelected={sort}
                // onChange={changeSortHandler}
                onChange={onChangeSort}
            />
            <Select
                label={t('article-sort-by-by')}
                options={orderOptions}
                valueSelected={order}
                // onChange={changeOrderHandler}
                onChange={onChangeOrder}
            />
        </div>
    );
});
