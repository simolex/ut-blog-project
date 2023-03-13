import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames';
import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const mods: Mods = {};

    return (
        <div className={classNames(styles.articleImageBlockComponent, {}, [className])}>
            ArticleImageBlockComponent
        </div>
    );
};
