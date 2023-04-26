import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames';
import { AppLink } from '@/@/shared/ui';
import { Avatar } from '@/@/shared/ui';
import { Button } from '@/@/shared/ui';
import { Card } from '@/@/shared/ui';
import { Icon } from '@/@/shared/ui';
import { Text } from '@/@/shared/ui';
import {
    type Article,
    ArticleBlockType,
    type ArticleTextBlock,
    ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ARTICLE_ITEM_SESSIONSTORAGE_INDEX } from '../../model/const';
import EyeIcon from '@/shared/assets/icons/eye-20x20.svg';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    index?: number;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, isLoading, target, index } = props;
    const { t } = useTranslation('article');

    const navigate = useNavigate();

    const title = <Text text={article.title} className={styles.title} />;
    const types = <Text text={article.type.join(', ')} className={styles.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={styles.views} />
            <Icon Svg={EyeIcon} className={styles.viewsIcon} width={24} height={24} />
        </>
    );
    const createdAt = <Text text={article.createdAt} className={styles.date} />;
    const image = <img src={article.img} alt={article.title} className={styles.img} />;

    const onDetailsClick = () => {
        sessionStorage.setItem(ARTICLE_ITEM_SESSIONSTORAGE_INDEX, JSON.stringify(index));
    };

    if (view === ArticleView.LIST) {
        const textBlock = article?.blocks?.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
                <Card className={styles.card}>
                    <div className={styles.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={styles.username} />
                        {createdAt}
                    </div>
                    {title}
                    {types}
                    {image}
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />
                    )}
                    <div className={styles.footer}>
                        <AppLink target={target} to={RoutePath.article_details + article.id}>
                            <Button onClick={onDetailsClick}>{t('article-read-more')}</Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.article_details + article.id}
            className={classNames(styles.articleListItem, {}, [className, styles[view]])}
            onClick={onDetailsClick}
        >
            <Card className={styles.card}>
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
        </AppLink>
    );
});
