import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames';
import { TabItem, Tabs } from '@/@/shared/ui';
import { ArticleType } from '../../model/types/article';

interface ArticleTypesTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypesTabs = memo((props: ArticleTypesTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation('article');

    const typeTabs = useMemo<TabItem<ArticleType>[]>(
        () => [
            {
                value: 'ALL',
                content: t('article-type-all'),
            },
            {
                value: 'IT',
                content: t('article-type-it'),
            },
            {
                value: 'ECONOMICS',
                content: t('article-type-economics'),
            },
            {
                value: 'SCIENCE',
                content: t('article-type-science'),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: TabItem<ArticleType>) => {
            onChangeType(tab.value);
        },
        [onChangeType],
    );

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
});
