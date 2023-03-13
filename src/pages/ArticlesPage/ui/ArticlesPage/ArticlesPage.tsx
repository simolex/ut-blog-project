import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const mods: Mods = {};

    return <div className={classNames(styles.articlesPage, {}, [className])}>ArticlesPage</div>;
};

export default memo(ArticlesPage);
