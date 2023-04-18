import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames, Mods } from '@/shared/lib/classNames';
import { PageWrapper } from '@/widgets/PageWrapper/PageWrapper';
import styles from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);
    const mods: Mods = {};

    return (
        <PageWrapper className={classNames(styles.articleEditPage, {}, [className])}>
            {isEdit ? t('edit-article-with-that-id') + id : t('create-new-article')}
        </PageWrapper>
    );
});
export default ArticleEditPage;
