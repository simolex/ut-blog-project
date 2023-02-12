import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={styles.linkItem}>
                    {t('main-link')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about" className={styles.linkItem}>
                    {t('about-link')}
                </AppLink>
            </div>
        </div>
    );
};
