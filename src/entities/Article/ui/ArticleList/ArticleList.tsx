import { FC, HTMLAttributeAnchorTarget, memo, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { classNames } from '@/shared/lib/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import styles from './ArticleList.module.scss';
import { ArticlePageFilters } from '@/pages/ArticlesPage/ui/ArticlePageFilters/ArticlePageFilters';
import { ARTICLE_ITEM_SESSIONSTORAGE_INDEX } from '../../model/const';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    onLoadNextPage?: () => void;
    virtualized?: boolean;
}

const Header = () => <ArticlePageFilters />;

const getSkeleton = (view: ArticleView) =>
    new Array(view === ArticleView.GRID ? 9 : 3)
        .fill(0)
        .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.LIST,
        target,
        onLoadNextPage,
        virtualized = true,
    } = props;
    const { t } = useTranslation('article');
    const [selectedArticleId, setSelectedArticleId] = useState(1);
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

    useEffect(() => {
        const paged = sessionStorage.getItem(ARTICLE_ITEM_SESSIONSTORAGE_INDEX) || 1;
        setSelectedArticleId(Number(paged));
    }, []);

    useEffect(() => {
        // TODO
        let timeout: any;
        if (view === ArticleView.GRID) {
            timeout = setTimeout(() => {
                if (virtuosoGridRef.current) {
                    virtuosoGridRef.current.scrollToIndex(selectedArticleId);
                }
            }, 100);
        }
        return () => clearTimeout(timeout);
    }, [selectedArticleId, view]);

    const renderArticle = (index: number, item: Article) => (
        <ArticleListItem
            article={item}
            view={view}
            target={target}
            key={item?.id}
            // index={index}
        />
    );

    // eslint-disable-next-line react/no-unstable-nested-components
    const Footer = memo(() => {
        if (isLoading) {
            return <div className={styles.skeleton}>{getSkeleton(ArticleView.LIST)}</div>;
        }
        return null;
    });

    if (!isLoading && !articles?.length) {
        return (
            <div className={classNames(styles.articleList, {}, [className])}>
                <Text title={t('article-not-found')} />
            </div>
        );
    }

    // eslint-disable-next-line react/no-unstable-nested-components
    const ItemContainerComp: FC<{ height: number; width: number; index: number }> = ({
        height,
        width,
        index,
    }) => (
        <div className={styles.ItemContainer}>
            <ArticleListItemSkeleton key={index} className={styles.card} view={ArticleView.GRID} />
        </div>
    );

    console.log(articles);

    return (
        articles.length && (
            <div className={classNames(styles.articleList, {}, [className, styles[view]])}>
                {view === 'LIST' ? (
                    <Virtuoso
                        style={{ height: '100%' }}
                        data={articles}
                        itemContent={renderArticle}
                        endReached={onLoadNextPage}
                        initialTopMostItemIndex={selectedArticleId}
                        components={{
                            Header,
                            Footer,
                        }}
                    />
                ) : (
                    <VirtuosoGrid
                        style={{ height: '100%' }}
                        ref={virtuosoGridRef}
                        totalCount={articles?.length}
                        components={{ Header, ScrollSeekPlaceholder: ItemContainerComp }}
                        endReached={onLoadNextPage}
                        data={articles}
                        itemContent={renderArticle}
                        listClassName={styles.itemsWrapper}
                        scrollSeekConfiguration={{
                            enter: (velocity) => Math.abs(velocity) > 200,
                            exit: (velocity) => Math.abs(velocity) < 30,
                        }}
                    />
                )}
            </div>
        )
    );
});
