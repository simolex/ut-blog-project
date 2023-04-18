import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { classNames } from '@/shared/lib/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean;
}

const getSkeleton = (view: ArticleView) =>
    new Array(view === ArticleView.GRID ? 9 : 3)
        .fill(0)
        .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.GRID,
        target,
        virtualized = true,
    } = props;
    const { t } = useTranslation('article');

    const isList = view === ArticleView.LIST;
    const itemsPerRow = isList ? 1 : 3;
    const rowCount = isList ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRenderer = ({ index, isScrolling, isVisible, key, style }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    target={target}
                    key={articles[i].id}
                />,
            );
        }

        return (
            <div key={key} className={styles.rowList} style={style}>
                {items}
            </div>
        );
    };

    // const renderArticles = (article: Article) => (
    //     <ArticleListItem article={article} view={view} key={article.id} target={target} />
    // );

    if (!isLoading && !articles?.length) {
        return (
            <div className={classNames(styles.articleList, {}, [className])}>
                <Text title={t('article-not-found')} />
            </div>
        );
    }

    return (
        // @ts-ignore
        <WindowScroller scrollElement={document.getElementById('PAGE_ID') as Element}>
            {({ width, height, registerChild, onChildScroll, isScrolling, scrollTop }) => (
                <div
                    className={classNames(styles.articleList, {}, [className])}
                    // @ts-ignore
                    ref={registerChild}
                >
                    {virtualized ? (
                        // @ts-ignore
                        <List
                            height={height ?? 700}
                            rowCount={rowCount}
                            rowHeight={isList ? 700 : 330}
                            rowRenderer={rowRenderer}
                            width={width ? width - 60 : 700}
                            autoHeight
                            isScrolling={isScrolling}
                            onScroll={onChildScroll}
                            scrollTop={scrollTop}
                        />
                    ) : (
                        articles.map((item) => (
                            <ArticleListItem
                                article={item}
                                view={view}
                                target={target}
                                key={item.id}
                            />
                        ))
                    )}
                    {isLoading && getSkeleton(view)}
                </div>
            )}
        </WindowScroller>
    );
});
