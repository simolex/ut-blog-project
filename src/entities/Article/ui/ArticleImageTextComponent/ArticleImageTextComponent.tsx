import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames';
import styles from './ArticleImageTextComponent.module.scss';

interface ArticleImageTextComponentProps {
    className?: string;
}

export const ArticleImageTextComponent = (props: ArticleImageTextComponentProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const mods: Mods = {};

    return (
        <div className={classNames(styles.articleImageTextComponent, {}, [className])}>
            ArticleImageTextComponent
        </div>
    );
};
