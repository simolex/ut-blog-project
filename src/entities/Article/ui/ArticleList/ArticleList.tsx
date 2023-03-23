import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles?: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeleton = (view: ArticleView) =>
    new Array(view === ArticleView.GRID ? 9 : 3)
        .fill(0)
        .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList = memo((props: ArticleListProps) => {
    const { className, articles, isLoading, view = ArticleView.GRID } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(styles.articleList, {}, [className])}>
                {getSkeleton(view)}
            </div>
        );
    }

    const renderArticles = (article: Article) => (
        <ArticleListItem article={article} view={view} key={article.id} />
    );

    return (
        <div className={classNames(styles.articleList, {}, [className])}>
            {articles && articles?.length > 0 ? articles?.map(renderArticles) : null}
        </div>
    );
});
