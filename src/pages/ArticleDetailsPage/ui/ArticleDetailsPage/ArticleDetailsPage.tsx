import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames, Mods } from 'shared/lib/classNames';
import { ArticleDetails } from 'entities/Article';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const mods: Mods = {};
    const { id: articleId } = useParams<{ id: string }>();

    if (!articleId) {
        return (
            <div className={classNames(styles.articleDetailsPage, {}, [className])}>
                {t('article-not-found')}
            </div>
        );
    }

    return (
        <div className={classNames(styles.articleDetailsPage, {}, [className])}>
            <ArticleDetails id={articleId} />
        </div>
    );
};

export default memo(ArticleDetailsPage);
