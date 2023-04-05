import { getArticleDetailsData } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { classNames, Mods } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';
import { getCanEditArticle } from '../../model/selectors/article';
import styles from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const mods: Mods = {};
    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);
    const canEditArticle = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}/${article?.id}/edit`);
    }, [navigate, article?.id]);

    return (
        <div className={classNames(styles.articleDetailsPageHeader, {}, [className])}>
            <Button onClick={onBackToList}>{t('article-go-back')}</Button>
            {canEditArticle && (
                <Button className={styles.editBtn} onClick={onEditArticle}>
                    {t('article-edit')}
                </Button>
            )}
        </div>
    );
});
