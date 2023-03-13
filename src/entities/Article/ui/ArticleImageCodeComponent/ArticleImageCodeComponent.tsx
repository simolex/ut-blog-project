import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames';
import styles from './ArticleImageCodeComponent.module.scss';

interface ArticleImageCodeComponentProps {
    className?: string;
}

export const ArticleImageCodeComponent = (props: ArticleImageCodeComponentProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const mods: Mods = {};

    return (
        <div className={classNames(styles.articleImageCodeComponent, {}, [className])}>
            ArticleImageCodeComponent
        </div>
    );
};
