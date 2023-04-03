import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text/Text';
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
}

const getSkeleton = (view: ArticleView) =>
    new Array(view === ArticleView.GRID ? 9 : 3)
        .fill(0)
        .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList = memo((props: ArticleListProps) => {
    const { className, articles, isLoading, view = ArticleView.GRID, target } = props;
    const { t } = useTranslation('article');

    const rowRenderer = ({ index, isScrolling, isVisible, key, style }: ListRowProps) => (
        <div key={key} className={className} style={style}>
            <ArticleListItem
                article={articles[index]}
                view={view}
                className={className}
                target={target}
            />
        </div>
    );

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
        <WindowScroller scrollElement={document.getElementById('PAGE_ID') as Element}>
            {({ width, height, registerChild, onChildScroll, isScrolling, scrollTop }) => (
                <div
                    className={classNames(styles.articleList, {}, [className])}
                    ref={registerChild}
                >
                    <List
                        height={height ?? 700}
                        rowCount={articles.length}
                        rowHeight={700}
                        rowRenderer={rowRenderer}
                        width={width ? width - 60 : 700}
                        autoHeight
                        isScrolling
                        onScroll={onChildScroll}
                        scrollTop={scrollTop}
                    />
                    {isLoading && getSkeleton(view)}
                </div>
            )}
        </WindowScroller>
    );
});
