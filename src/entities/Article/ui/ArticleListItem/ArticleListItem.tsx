import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import EyeIcon from 'shared/assets/icons/eye-20x20.svg';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { classNames } from 'shared/lib/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    isLoading?: boolean;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, isLoading } = props;
    const { t } = useTranslation('article');

    const navigate = useNavigate();
    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);

    const title = <Text text={article.title} className={styles.title} />;
    const types = <Text text={article.type.join(', ')} className={styles.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={styles.views} />
            <Icon Svg={EyeIcon} className={styles.viewsIcon} />
        </>
    );
    const createdAt = <Text text={article.createdAt} className={styles.date} />;
    const image = <img src={article.img} alt={article.title} className={styles.img} />;

    if (view === ArticleView.LIST) {
        const textBlock = article?.blocks?.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
                <Card className={styles.card}>
                    <div className={styles.header}>
                        <Avatar size={30} src={article.author.avatar} />
                        <Text text={article.author.username} className={styles.username} />
                        {createdAt}
                    </div>
                    {title}
                    {types}
                    {image}
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />
                    )}
                    <div className={styles.footer}>
                        <Button onClick={onOpenArticle}>{t('article-read-more')}</Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
            <Card className={styles.card} onClick={onOpenArticle}>
                <div className={styles.imageWrapper}>
                    {image}
                    {createdAt}
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
