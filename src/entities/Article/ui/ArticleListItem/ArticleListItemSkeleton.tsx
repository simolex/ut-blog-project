import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/types/article';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
    isLoading?: boolean;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const { className, view, isLoading } = props;

    const title = <Skeleton className={styles.title} width="85%" height={20} />;
    const types = <Skeleton className={styles.types} width="45%" height={16} />;
    const views = (
        <>
            <Skeleton className={styles.views} width="10%" height={20} />
            <Skeleton className={styles.viewsIcon} width={20} height={20} border="50%" />
        </>
    );
    // const createdAt = <Text text={article.createdAt} className={styles.date} />;
    // const image = <img src={article.img} alt={article.title} className={styles.img} />;

    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
                <Card className={styles.card}>
                    <div className={styles.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton width="20%" height={16} className={styles.username} />
                        <Skeleton width="10%" height={16} className={styles.date} />
                    </div>
                    {title}
                    <Skeleton height={200} width="95%" className={styles.img} />
                    <Skeleton height={150} width="100%" className={styles.textBlock} />

                    <div className={styles.footer}>
                        <Skeleton height={30} width="20%" className={styles.img} />
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
            <Card className={styles.card}>
                <div className={styles.imageWrapper}>
                    <Skeleton width={200} height={200} className={styles.img} />
                    {/* {createdAt} */}
                </div>
                <div className={styles.infoWrapper}>
                    {types}
                    {views}
                </div>
                {title}
            </Card>
        </div>
    );
});
